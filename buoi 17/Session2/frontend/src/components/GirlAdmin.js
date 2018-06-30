import React, { Component } from "react";
import axios from "../axios";
import _ from "lodash";

class GirlAdmin extends Component {
  componentWillMount() {
    axios
      .get("/api/images")
      .then(response => {
        // console.log(respone.data);
        this.setState({
          //   girls: response.data
          girls: _.mapKeys(response.data, "_id")
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return;
    <div />;
  }
}

export default GirlAdmin;
