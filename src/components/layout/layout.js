import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex: auto;
  flex-direction: ${props => (props.row ? 'row' : 'column')}
`
