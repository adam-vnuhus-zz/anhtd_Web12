import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from '../axios';
import config from '../config';

class GirlDetail extends Component {
    componentWillMount(){
        const girlId = this.props.match.params.id;
        axios.get(`/api/images/${girlId}`)
        .then(respone =>{
            this.setState({
                girl: respone.data
            })
        })
        .catch(err => console.log(err));
    }
    state={
        girl: null
    }

    back = ()=>{
        this.props.history.goBack();
    }

    render() {
        if(!this.state.girl) return <div>Loading...</div>
        return (
            <div>
                <button onClick={this.back}>
                    Back
                </button>
                <div className="child-center">
                    <div style={{width: "60%"}} className="child-center">
                        <img className="img-fluid w-100" src={config.rootPath + this.state.girl.imageUrl}
                        alt={this.state.girl.title} />
                    </div>
                </div>
            </div>
        );
    }
}


export default GirlDetail;