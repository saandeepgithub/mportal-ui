import React from "react";
import axios from "axios";
import GrocessoryHomePage from "./grocessoryhomepage";
import Grocessories from "./grocessories";
import Form from "react-bootstrap/Form";

class SearchGroceri extends React.Component {

    state = {
        groceriName: '',
        quantity: '',
        searchGroceriList: '',
        searchGroceri: []
    }

    searchGroceri = (event) => {
        var groceri = event.target.value;
        this.setState({searchGroceri: []})
        axios.get("http://localhost:3000/groceri/details/" + groceri).then(res => {
            var response = res.data.response;
            response.map(groceri => {
                this.state.searchGroceri.push(<Grocessories groceriId={groceri.groceriId}
                                                            grocessoryItem={groceri.groceriName}
                                                            quantity={groceri.quantity} variant="danger"
                                                            displayStatus={true}/>)
            });
            this.setState({searchGroceriList: this.state.searchGroceri});
        });
    }

    render() {
        return <div>
            <div>
                <GrocessoryHomePage/>
                <div className="col-sm-4">
                    <Form.Group>
                        <Form.Control placeholder="search groceri" name="groceriName" onChange={this.searchGroceri}/>
                    </Form.Group>
                </div>
                <div>
                    {this.state.searchGroceriList}
                </div>
            </div>
        </div>
    }
}

export default SearchGroceri;
