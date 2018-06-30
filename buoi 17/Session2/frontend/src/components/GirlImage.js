import React, { Component } from "react";
import config from "../config";
import {Link} from 'react-router-dom';

class GirlImage extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="girl_image">
          <Link to={`/girl/${this.props.img._id}`}>
            <img
                className="img-fluid"
                src={config.rootPath + this.props.img.imageUrl}
                alt={this.props.img.title}
              />
          </Link>
          
          <h5>{this.props.img.title}</h5>
          <p>{this.props.img.description}</p>
        </div>
      </div>
    );
  }
}

export default GirlImage;
