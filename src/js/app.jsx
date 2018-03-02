"use strict";

// Libraries
import React from "react";
import { render } from "react-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>Test6</h4>
      </div>
    );
  }
}
render(<Main />, document.getElementById("app"));
