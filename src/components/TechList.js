import React, { Component } from "react";

export default class TechList extends Component {
  state = {
    techs: ["Node.js", "React.js", "React Native"],
    newTech: ""
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  render() {
    const { techs, newTech } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={newTech} />
        <button type="submit">Enviar</button>
        <ul>
          {techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </form>
    );
  }
}
