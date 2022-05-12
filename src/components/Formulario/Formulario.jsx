import React, { Component } from "react";
import Title from "../Title/Title";
import style from "./Formulario.module.scss";
import { BiNote } from "react-icons/bi";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

export default class Formulario extends Component {
  state = {
    name: "",
    nota: "",
    importancia: "",
  };

  mudarState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  mudarChecked = (event) => {
    this.setState({ importancia: event.target.value });
  };

  criarNota = (event) => {
    event.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.nota !== "" &&
      this.state.importancia !== ""
    ) {
      this.props.dados({
        id: uuidv4(),
        name: this.state.name,
        nota: this.state.nota,
        importancia: this.state.importancia,
      });
      this.setState({ name: "", nota: ""});
    } else {
      toast.error("Preencha todas as informações!", {
        style: {
          border: "1px solid rgb(174, 0, 255)",
          fontFamily: "Poppins",
        },
      });
    }
  };

  render() {
    return (
      <>
        <form className={style.formulario}>
          <Title />
          <input
            className={style.input}
            type="text"
            placeholder="Titulo"
            value={this.state.name}
            name="name"
            onChange={this.mudarState.bind(this)}
            autoFocus
          />

          <input
            className={style.input}
            type="text"
            placeholder="Escreva sua nota"
            value={this.state.nota}
            name="nota"
            onChange={this.mudarState.bind(this)}
          />
          <section className={style.section}>
            <div>
              <input
                type="radio"
                id="Importante"
                name="brand"
                value="Importante"
                onChange={this.mudarChecked.bind(this)}
              />
              <BiNote color="red" />
              <label htmlFor="Importante">Importante</label>
            </div>

            <div>
              <input
                type="radio"
                id="Normal"
                name="brand"
                value="Normal"
                onChange={this.mudarChecked.bind(this)}
              />
              <BiNote color="rgba(174, 0, 255, 0.8)" />
              <label htmlFor="Normal">Normal</label>
            </div>

            <div>
              <input
                type="radio"
                id="Depois"
                name="brand"
                value="Depois"
                onChange={this.mudarChecked.bind(this)}
              />
              <BiNote color="green" />
              <label htmlFor="Depois">Depois</label>
            </div>
          </section>

          <button onClick={this.criarNota.bind(this)}>Criar nota</button>
        </form>
      </>
    );
  }
}
