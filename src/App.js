import React, { Component } from "react";
import Done from "./Done";
import { BrowserRouter, Route } from "react-router-dom";
import Associations from "./Associations";
import Scanner from "./Scanner";
import Dons from "./Dons";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/scan-and-give">
        <div>
          <Route exact path="/" component={Associations} />
          <Route path="/scanner/:associationId" component={Scanner} />
          <Route path="/done" component={Done} />
          <Route path="/dons" component={Dons} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
