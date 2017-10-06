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
  &.show {
    display: block;
  }
  &:empty {
    display: none;
  }
  &.topLeft {
    left: 0;
    right: inherit;
  }
  &.topCenter {
    left: 0;
    margin: 0 auto;
  }
  &.topFull {
    left: 0;
    right: 0;
    width: 100%;
  }
  &.bottomRight {
    top: inherit;
    bottom: 0;
  }
  &.bottomLeft {
    top: inherit;
    right: inherit;
    bottom: 0;
    left: 0;
  }
  &.bottomCenter {
    top: inherit;
    bottom: 0;
    left: 0;
    margin: 0 auto;
  }
  &.bottomFull {
    top: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
`

export default class ToastrContainer extends React.Component {
  render() {
    return (
      <Container
        className={c({ show: this.props.show }, this.props.position, this.props.className)}
      >
        {this.props.children}
      </Container>
    )
  }
}
