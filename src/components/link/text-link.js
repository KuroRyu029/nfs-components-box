import React from 'react'
import styled from 'styled-components'
import { globalVariable } from './../../const/theme'

const A = styled.a`
  color: ${globalVariable.colorPrimary};
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: ${globalVariable.colorPrimaryHover};
    text-decoration: underline;
  }
`

export default class TextLink extends React.Component {
  render() {
    return(
      <A {...this.props}>
        {this.props.children}
      </A>
    )
  }
}