import React, { Component } from "react";
import axios from "../axios";

import NavBar from "./NavBar";
import MainContent from "./MainContent";

class GirlList extends Component {
  state = {
    images: [],
    searchString: ""
  };

  componentDidMount() {
    axios
      .get("/api/images")
      .then(data => {
        console.log(data.data);
        this.setState({
          images: data.data
        });
      })
      .catch(err => console.error(err));
  }

  _onSearchChanged = text => this.setState({ searchString: text });

  render() {
    const displayedImages = this.state.images.filter(
      img =>
        img.title.includes(this.state.searchString) ||
        img.description.includes(this.state.searchString)
    );

    return (
      <div className="App">
        <NavBar onSearchChanged={this._onSearchChanged} />
        <MainContent images={displayedImages} />
      </div>
    );
  }
}

export default GirlList;
