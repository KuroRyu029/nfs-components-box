import React, { Component } from 'react'
import styled from 'styled-components'

const SiderStyle = styled.div`
  color: white;
  background: #3ba0e9;
  line-height: 120px;
  flex: 0 0;
  max-width: 200px;
  box-sizing: border-box;
  transition: all .2s;
  position: relative;

  @media (max-width: 768px) {
    display: ${props => (props.isShowToggle ? 'none' : 'block')};
  }
`

export default class Sider extends Component {
  render() {
    console.log(`test ${this.props.isShowToggle}`)
    return (
      <div>
        <SiderStyle isShowToggle={this.props.isShowToggle} >
          Sider
        </SiderStyle>
      </div>
    )
  }
}
