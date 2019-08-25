import React, { Component } from "react";

export default class TechList extends Component {
  state = {
    techs: ["Node.js", "React.js", "React Native"]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>React.js</li>
        <li>React Native</li>
      </ul>
    );
  }
}
