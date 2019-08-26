import React, { Component } from "react";
import TechItem from "./TechItem";

export default class TechList extends Component {
  state = {
    techs: ["Node.js", "React.js", "React Native"],
    newTech: ""
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
          <TechItem />
        </ul>
      </form>
    );
  }
}
