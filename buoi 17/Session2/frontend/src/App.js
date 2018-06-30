import React, { Component } from "react";
import {Switch, Route, withRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GirlList from "./components/GirlList";
import GirlDetail from "./components/GirlDetail";
import GirlAdmin from "./components/GirlAdmin";

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path="/admin" component={GirlAdmin}/>
        <Route path="/girl/:id" component={GirlDetail} />
        <Route path="/"component={GirlList} />
      </Switch>
    )
  }
}

export default withRouter(App);
