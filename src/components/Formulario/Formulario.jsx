import React, { Component } from "react";
import Title from "../Title/Title";
import style from "./Formulario.module.scss";

export default class Formulario extends Component {
  state = {
    name: "",
    nota: "",
  };
  
  mudarState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  criarNota = (event) => {
    event.preventDefault();
    this.props.dados({ name: this.state.name, nota: this.state.nota });
    this.setState({ name: "", nota: "" });
  };

  render() {
    return (
      <>
        <form className={style.formulario}>
          <Title />
          <input
            type="text"
            placeholder="Titulo"
            value={this.state.name}
            name="name"
            onChange={this.mudarState.bind(this)}
            autoFocus
          />

          <input
            type="text"
            placeholder="Escreva sua nota"
            value={this.state.nota}
            name="nota"
            onChange={this.mudarState.bind(this)}
          />

          <button onClick={this.criarNota.bind(this)}>Criar nota</button>
        </form>
      </>
    );
  }
}
