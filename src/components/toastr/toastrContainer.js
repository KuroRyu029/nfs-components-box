import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
position:         text: topRight / bottomRight / topLeft / bottomLeft / topCenter / bottomCenter / topFull / bottomFull
------------------------------------------------------*/

const Container = styled.div`
  width: 450px;
  position: fixed;
  padding: 10px;
  z-index: ${globalVariable.toastrZindex};
  display: none;
  top: 0;
  right: 0;
  display: none;
  ${props => props.show && `
    display: block;
  `}
  ${props => props.position === 'topLeft' && `
    left: 0;
    right: inherit;
  `}
  ${props => props.position === 'topCenter' && `
    left: 0;
    margin: 0 auto;
  `}
  ${props => props.position === 'topFull' && `
    left: 0;
    right: 0;
    width: calc(100vw - 20px);
  `}
  ${props => props.position === 'bottomRight' && `
    top: inherit;
    bottom: 0;
  `}
  ${props => props.position === 'bottomLeft' && `
    top: inherit;
    right: inherit;
    bottom: 0;
    left: 0;
  `}
  ${props => props.position === 'bottomCenter' && `
    top: inherit;
    bottom: 0;
    left: 0;
    margin: 0 auto;
  `}
  ${props => props.position === 'bottomFull' && `
    top: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    width: calc(100vw - 20px);
  `}
  &:empty {
    display: none;
  }
`

export default class ToastrContainer extends React.Component {
  render() {
    return (
      <Container
        className={c(this.props.className)}
        position={this.props.position}
        show={this.props.show}
      >
        {this.props.children}
      </Container>
    )
  }
}
