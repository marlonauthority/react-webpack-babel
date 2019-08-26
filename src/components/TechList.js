import React, { Component } from "react";
import TechItem from "./TechItem";

export default class TechList extends Component {
  // default props e proptypes em classe eé escrito assim
  /**
   * static default props
   * static proptypes
   */

  state = {
    techs: [],
    newTech: ""
  };

  // -> Ciclo de vida
  /**
   * -> Executado assim que o component aparece em tela
   * componentDidMount(){}
   *
   * -> Executando sempre que houver alteracoes nas props ou no state
   * componentDidUpdate(prevProps, prevState){}
   *
   * -> Executado quando o componente deixar de existir
   * componenetWilUnmount(){}
   */

  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

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
        </ul>
      </form>
    );
  }
}
