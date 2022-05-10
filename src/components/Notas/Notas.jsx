import React, { Component } from 'react'
import styles from "./Notas.module.scss"
import {GrClose} from "react-icons/gr"

export default class Notas extends Component {
  render() {

    const verificaTarget = () => {
      this.props.mudarArray(this.props.index)
    }

    return (
      <div className={styles.card}>
        <GrClose size={20} onClick={()=> verificaTarget()}/>
        <h1>{this.props.titulo}</h1>
        <h2>{this.props.nota}</h2>
      </div>
    )
  }
}
