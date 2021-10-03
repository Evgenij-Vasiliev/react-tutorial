import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const heading = (
      <h1 className="site-heading">
        <Table />
      </h1>
    );
    return <div>{heading}</div>;
  }
}

export default App;
