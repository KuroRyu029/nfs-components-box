import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, inputStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
disabled:         boolean
defaultValue:     text
error:            boolean
errorMsg:         text
success:          boolean
large:            boolean
small:            boolean
------------------------------------------------------*/

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border: 1px solid ${props => (props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder)};
  border-radius: ${inputStyle.inputBorderRadius};
  padding: ${inputStyle.inputSizeNormalPadding};
  font-size: 18px;
  color: ${props => (props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor)};
  background: transparent;
  font-family: 'CloudLight';
  line-height: 0.9;
  &::placeholder {
    color: ${props => (props.theme.inputPlaceholderColor ? props.theme.inputPlaceholderColor : inputStyle.inputPlaceholderColor)};
  }
  &:focus,
  &:active {
    outline: 0;
    border: 1px solid ${props => (props.theme.inputBorderActive ? props.theme.inputBorderActive : inputStyle.inputBorderActive)};
  }
  &:disabled {
    background: ${inputStyle.inputDisabledBg};
    color: ${inputStyle.inputDisabledColor} !important;
    border: ${inputStyle.inputDisabledBorderColor} !important;
    &::placeholder {
      color: ${inputStyle.inputDisabledPlaceholderColor} !important;
    }
  }
  &.error {
    border: 1px solid ${globalVariable.colorError};
    box-shadow: 0 0 20px ${props => (props.theme.inputShadow ? props.theme.inputShadow : inputStyle.inputShadow)};
    display: block;
    + span {
      font-size: ${globalVariable.errorMsgFontSize};
      text-align: right;
      margin-top: 10px;
      color: ${globalVariable.colorError};
    }
  }
  &.success {
    border: 1px solid ${globalVariable.colorSuccess};
  }
  &.large {
    font-size: ${globalVariable.eleLargeFontSize};
    padding: ${inputStyle.inputSizeLargePadding};
  }
  &.small {
    font-size: ${globalVariable.eleSmallFontSize};
    padding: ${inputStyle.inputSizeSmallPadding};
  }
`
export default class InputComponent extends React.Component {
  render() {
    const {
      disabled,
      defaultValue,
      error,
      errorMsg,
      success,
      large,
      small,
      className,
      ...other } = this.props
    return (
      <InputContainer>
        <Input
          className={c({ error: error, success: success, large: large, small: small }, className)}
          type="text"
          placeholder="insert your name"
          disabled={disabled}
          defaultValue={defaultValue}
          {...other}
        />
        {
          error && errorMsg ?
            <span>Email is wrong</span> : ''
        }
      </InputContainer>
    )
  }
}
