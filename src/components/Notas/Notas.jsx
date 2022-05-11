import React, { Component } from "react";
import styles from "./Notas.module.scss";
import { GrClose } from "react-icons/gr";
import classNames from "classnames";

import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export default class Notas extends Component {
    bounceAnimation = keyframes`${pulse}`;

    BouncyDiv = styled.div`
      animation: 1s ${this.bounceAnimation};
    `;

  render() {
    const verificaTarget = () => {
      this.props.mudarArray(this.props.index);
    };

    return (
      <this.BouncyDiv
        className={classNames({
          [styles.card]: true,
          [styles[`${this.props.importancia}`]]: true,
        })}
      >
        <GrClose size={20} onClick={() => verificaTarget()} />
        <h1>{this.props.titulo}</h1>
        <h2>{this.props.nota}</h2>
      </this.BouncyDiv>
    );
  }
}
