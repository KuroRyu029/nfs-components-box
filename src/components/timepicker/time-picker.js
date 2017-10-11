import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import InputTime from './time-input'
import { globalVariable } from './../../const/theme'

const c = classnames.bind(styled)

const Test = styled.div`
  // border: 1px solid blue;
`

export default class TimePicker extends React.Component {
  render(){
    return(
      <Test>
        <p>Test</p>
        <InputTime {...this.props} />
      </Test>
    )
  }
}