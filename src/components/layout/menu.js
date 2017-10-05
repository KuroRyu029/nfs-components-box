import React, { Component } from 'react'
import styled from 'styled-components'
import Layout, { Content, Header, Sider, Burger } from './index'

export default class Menu extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true,
    }
  }

  handleToggleMenu() {
    this.setState({
      toggle: !this.state.toggle,
    })
    // console.log(this.state.toggle)
    // console.log('==========>')
  }

  render() {
    return (
      <div>
        <Layout>
          <Burger handleClick={() => this.handleToggleMenu()} isShowToggle={this.state.toggle} />
          <Header> Header </Header>
        </Layout>
        <Layout row>
          <Sider isShowToggle={this.state.toggle}> Sider </Sider>
          <Content> Content </Content>
        </Layout>
        {this.props.children}
      </div>
    )
  }
}
