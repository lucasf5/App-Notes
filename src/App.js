import Formulario from "./components/Formulario/Formulario";
import style from "./App.module.scss";

import React, { Component } from "react";
import Notas from "./components/Notas/Notas";

export default class App extends Component {
  state = {
    name: "",
    nota: "",
    texto: "",
    infos: JSON.parse(localStorage.getItem("dados")) || [],
  };
  dados = ({ ...dados }) => {
    this.setState({ infos: [...this.state.infos, dados] });
  };

  mudarArray = (quemFoiClicado) => {
    const novaInfo = [...this.state.infos];
    novaInfo.splice(quemFoiClicado, 1);
    this.setState({ infos: [...novaInfo] });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ texto: value });
  };

  componentDidUpdate(prevState){
    if (this.state.infos !== prevState.infos) {
        localStorage.setItem("dados", JSON.stringify(this.state.infos));
    }
  }

  render() {

    const regex = new RegExp(this.state.texto, "i")

    return (
      <div className={style.App}>
        <Formulario dados={this.dados} />

        <section>
          <input
            className={style.input}
            type="text"
            onChange={(event) => this.handleChange(event)}
            placeholder="Pesquise pelo nome"
            value={this.state.texto}
          />
          <article>
            {this.state.infos
            .filter(item => regex.test(item.name))
            .map((info, index) => (
              <Notas
                key={index}
                titulo={info.name}
                nota={info.nota}
                index={index}
                mudarArray={this.mudarArray}
              />
            ))}
          </article>
        </section>
      </div>
    );
  }
}