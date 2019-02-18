import React, { Component } from "react";
import Identite from "./Identite";
import { BrowserRouter, Route } from "react-router-dom";
import Associations from "./Associations";
import Scanner from "./Scanner";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/scan-and-give">
        <div>
          <Route exact path="/" component={Associations} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/identite" component={Identite} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
