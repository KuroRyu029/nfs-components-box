import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, inputStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
small:              boolean
large:              boolean
id:                 text
------------------------------------------------------*/

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  .radio {
    width: 25px;
    height: 25px;
    border: 1px solid ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
    border-radius: ${globalVariable.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100%;
    > span {
      opacity: 0;
      width: 15px;
      height: 15px;
      background: ${globalVariable.colorPrimary};
      border-radius: 100%;
    }
    &.small {
      width: 20px;
      height: 20px;
      > span {
        width: 12px;
        height: 12px;
      }
      + .title {
        font-size: 16px;
      }
    }
    &.large {
      width: 30px;
      height: 30px;
      > span {
        width: 20px;
        height: 20px;
      }
      + .title {
        font-size: 22px;
      }
    }
    + input:checked {
      background: green;
      color: red;
    }
  }
  > input {
    display: none;
    &:checked + .radio {
      border: 1px solid ${globalVariable.colorPrimary};
      color: #FFFFFF;
      > span {
        opacity: 1;
      }
    }
    &:disabled + .radio {
      background: ${inputStyle.inputDisabledBg};
    }
  }
  > .title {
    cursor: pointer;
    margin: 0 0 0 10px;
    line-height: 0.7;
  }
`

export default ({ id, name, small, large, title, className }) => (
  <CheckboxContainer>
    <input id={id} type="radio" name={name} />
    <label htmlFor={id} className={c('radio', { small: small, large: large }, className)}>
      <span />
    </label>
    <label className={c('title')} htmlFor={id}>{title}</label>
  </CheckboxContainer>
)
