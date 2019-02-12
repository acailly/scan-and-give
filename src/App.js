import React, {Component} from "react";
import Home from "./Home";
import Identite from "./Identite";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/identite" component={Identite}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
