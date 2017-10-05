import React, { Component } from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 36px;
  height: 42px;
  line-height: 42px;
  background: #4268f4;
  color: #fff;
  font-size: 18px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background .3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`

export default class Burger extends Component {
  render() {
    // console.log('burger=====>')
    // console.log(this.props.isShowToggle)
    return (
      <IconWrapper onClick={this.props.handleClick}>
        H
      </IconWrapper>
    )
  }
}
