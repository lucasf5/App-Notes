import Formulario from "./components/Formulario/Formulario";
import style from "./App.module.scss";
import toast, { Toaster } from "react-hot-toast";

import React, { Component } from "react";
import Notas from "./components/Notas/Notas";

export default class App extends Component {
  state = {
    name: "",
    nota: "",
    texto: "",
    infos: JSON.parse(localStorage.getItem("dados")) || [],
  };

  dados = (dados) => {
    this.setState({ infos: [...this.state.infos, dados] });
    toast.success("Nota criada com sucesso!", {
      style: {
        border: "1px solid rgb(174, 0, 255)",
        fontFamily: "Poppins",
      },
    });
  };

  mudarArray = (quemFoiClicado) => {
    const novaInfo = [...this.state.infos];
    novaInfo.splice(quemFoiClicado, 1);
    this.setState({ infos: [...novaInfo] });
    toast("Nota deletada com sucesso!", {
      icon: "👋",
      style: {
        border: "1px solid rgb(174, 0, 255)",
        fontFamily: "Poppins",
      },
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ texto: value });
  };

  componentDidUpdate(prevState) {
    if (this.state.infos !== prevState.infos) {
      localStorage.setItem("dados", JSON.stringify(this.state.infos));
    }
  }
  render() {
    const regex = new RegExp(this.state.texto, "i");

    return (
      <div className={style.App}>
        <Formulario dados={this.dados} className={style.formulario} />

        <section>
          <input
            className={style.input}
            type="text"
            onChange={(event) => this.handleChange(event)}
            placeholder="Pesquise pelo nome"
            value={this.state.texto}
          />
          <Toaster position="top-right" reverseOrder={false} />

          <article>
            {this.state.infos
              .filter((item) => regex.test(item.name))
              .map((info, index) => (
                <Notas
                  key={index}
                  titulo={info.name}
                  nota={info.nota}
                  index={index}
                  mudarArray={this.mudarArray}
                  importancia={info.importancia}
                />
              ))}
          </article>
        </section>
      </div>
    );
  }
}
