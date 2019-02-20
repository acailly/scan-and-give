import React, { Component } from "react";
import Done from "./Done";
import { BrowserRouter, Route } from "react-router-dom";
import Associations from "./Associations";
import Scanner from "./Scanner";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/scan-and-give">
        <div>
          <Route exact path="/" component={Associations} />
          <Route path="/scanner/:associationId" component={Scanner} />
          <Route path="/done" component={Done} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
