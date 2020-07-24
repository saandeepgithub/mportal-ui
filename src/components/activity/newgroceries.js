import React from "react";
import axios from "axios";
import GrocessoryHomePage from "./grocessoryhomepage";
import Grocessories from "./grocessories";
import Form from "react-bootstrap/Form";

class NewGroceries extends React.Component {

    state = {
        groceriName: '',
        quantity: '',
        groceriList: '',
        searchGroceriList: '',
        searchGroceri: [],
        groceri: [],
        searchStatus: false,
        reLoad: true
    }


    searchGroceri = (event) => {
        var groceri = event.target.value;
        this.setState({searchStatus: true});
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

    componentDidMount() {
        axios.get("http://localhost:3000/groceri/display/new").then(res => {
            var response = res.data.response;
            response.map(groceri => {
                this.state.groceri.push(<Grocessories groceriId={groceri.groceriId} grocessoryItem={groceri.groceriName}
                                                      quantity={groceri.quantity} variant="danger"
                                                      displayStatus={true}/>)
            });
            this.setState({groceriList: this.state.groceri});
            this.setState({reLoad: true})
        });
    }

    render() {
        return <div>
            <div>
                <GrocessoryHomePage reLoad={this.state.reLoad}/>
                <div className="col-sm-4">
                    <Form.Group>
                        <Form.Control placeholder="search groceri" name="groceriName" onChange={this.searchGroceri}/>
                    </Form.Group>
                </div>
                <div hidden={this.state.searchStatus}>
                    {this.state.groceriList}
                </div>
                <div hidden={!this.state.searchStatus}>
                    {this.state.searchGroceriList}
                </div>
            </div>
        </div>
    }
}

export default NewGroceries;
