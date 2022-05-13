import React, { Component } from 'react'
import style from "./Title.module.scss"
import {BiNote} from "react-icons/bi"

export default class Title extends Component {
  render() {
    return (
      <h1 className={style.titulo}>
          Notes <BiNote /> 
      </h1>
    )
  }
}
