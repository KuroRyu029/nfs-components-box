import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, buttonTheme, inputStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
id:               text
------------------------------------------------------*/
const InputFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  > input {
    display: none;
  }
`

const Label = styled.label`
  border: 1px solid ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
  border-radius: ${globalVariable.borderRadius};
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor};
  > span {
    padding: 10px 15px;
  }
  .button {
    cursor: pointer;
    padding: 10px 20px;
    color: #FFFFFF;
    background: ${buttonTheme.buttonBgDefault};
    &:hover {
      background: ${buttonTheme.buttonBgHoverDefault};
    }
  }
`

export default class InputFile extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFileName: '',
    }
  }
  selectFile(evt) {
    this.setState({ selectedFileName: evt.target.files[0].name })
  }
  render() {
    const { id, className, ...other } = this.props
    return (
      <InputFileContainer>
        <Label htmlFor={id} className={c(className)} {...other}>
          <span>{this.state.selectedFileName}</span>
          <div className={c('button')}>select file</div>
        </Label>
        <input onChange={(evt) => { this.selectFile(evt) }} id={id} type="file" />
      </InputFileContainer>
    )
  }
}
