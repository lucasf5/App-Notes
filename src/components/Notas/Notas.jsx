import React, { Component } from 'react'
import styles from "./Notas.module.scss"
import {GrClose} from "react-icons/gr"
import classNames from "classnames"

export default class Notas extends Component {
  render() {

    const verificaTarget = () => {
      this.props.mudarArray(this.props.index)
    }

    return (
      <div className={classNames({
        [styles.card]: true,
        [styles[`${this.props.importancia}`]]: true
      })}>
        <GrClose size={20} onClick={()=> verificaTarget()}/>
        <h1>{this.props.titulo}</h1>
        <h2>{this.props.nota}</h2>
      </div>
    )
  }
}
