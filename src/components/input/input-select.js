import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import Select, { Creatable } from 'react-select'
import 'react-select/dist/react-select.css'
import { globalVariable, inputStyle, tagStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
Async:            boolean
multi:            boolean
creatable:        boolean
name:             text
onHandleChange:   function
------------------------------------------------------*/

const options = [
  { value: 'one', label: 'One', disabled: false },
  { value: 'two', label: 'Two', disabled: true },
  { value: 'three', label: 'Three', disabled: false },
  { value: 'four', label: 'Four', disabled: false },
]

const getOptions = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.json()
    }).then((json) => {
      const fakeData = []
      json.map(({ name }) => {
        const optionObject = { value: name, label: name, disabled: false }
        fakeData.push(optionObject)
        return true
      })
      return { options: fakeData }
    })
}

const InputSelectContainer = styled.div`
  > div {
    font-size: 18px;
    &.has-value {
      &.Select--multi {
        .Select-control {
          padding: 5px 15px;
        }
      }
    }
    &.is-focused:not(.is-open) {
      > .Select-control {
        border: 1px solid;
        border-color: ${props => (props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder)};
        box-shadow: none;
      }
    }
    &.Select--multi {
      .Select-input {
        margin: 0;
      }
      .Select-value {
        margin: 5px 8px 5px 0;
        padding: ${tagStyle.tagSizeNormalPadding};
        border-radius: ${tagStyle.tagBorderRadius};
        font-size: ${tagStyle.tagSizeNormalFontSize};
        font-size: 15px;
        background: ${tagStyle.tagBg};
        color: ${tagStyle.tagColor};
        display: inline-flex;
        align-items: center;
        font-weight: 600;
        .Select-value-icon {
          order: 1;
          padding: 0;
          border: none;
          margin-left: 20px;
          &:hover {
            color: ${tagStyle.tagColor};
          }
        }
        .Select-value-label {
          padding: 0;
          line-height: 0.7;
        }
      }
    }
    &.Select--single {
      .Select-value {
        position: relative;
        line-height: 0.9;
        padding: 0;
        .Select-value-label {
          color: ${props => (props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor)} !important;
        }
      } 
    }
    .Select-control {
      padding: ${inputStyle.inputSizeNormalPadding};
      border-color: ${props => (props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder)};
      border-radius: ${inputStyle.inputBorderRadius};
      background: transparent;
      table-layout: fixed;
      .Select-placeholder {
        display: flex;
        align-items: center;
        padding: ${inputStyle.inputSizeNormalPadding};
        color: ${props => (props.theme.inputPlaceholderColor ? props.theme.inputPlaceholderColor : inputStyle.inputPlaceholderColor)};
      }
      .Select-input {
        height: auto;
        padding: 0;
        > input {
          padding: 0;
          color: ${props => (props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor)};
        }
      }
      &:hover {
        box-shadow: none;
      }
      .Select-multi-value-wrapper {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
      }
    }
    .Select-menu-outer {
      background: transparent;
      border-color: ${props => (props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder)};
      .Select-option {
        border: 1px solid;
        border-color: transparent;
        padding: ${inputStyle.inputSizeNormalPadding};
        color: ${props => (props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor)};
        box-shadow: none;
        background: transparent;
        &.is-disabled {
          color: ${inputStyle.inputDisabledColor};
          background: ${inputStyle.inputDisabledBg};
        }
        &.is-selected {
          color: #FFFFFF;
          background: rgba(${globalVariable.colorRgbPrimary}, 0.6);
          cursor: default;
        }
        &.is-focused {
          &:not(.is-selected) {
            background: transparent;
            border: 1px solid;
            border-color: ${globalVariable.colorPrimary};
            box-shadow: 0 0 10px ${props => (props.theme.inputShadow ? props.theme.inputShadow : inputStyle.inputShadow)};
          }
          &.is-selected {
            color: #FFFFFF;
            background: rgba(${globalVariable.colorRgbPrimary}, 0.6);
          }
        }
      }
    }
  }
`

export default class InputSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedValue: '',
    }
  }
  handleInputChange(val) {
    this.setState({ selectedValue: val })
    if (this.props.onHandleChange) {
      this.props.onHandleChange(this.state.selectedValue)
    }
  }
  render() {
    const { async, name, multi, creatable, className, ...other } = this.props
    return (
      <InputSelectContainer className={c('input-select')}>
        {
          async ?
            <Select.Async
              name={name}
              value={this.state.selectedValue}
              clearable={false}
              loadOptions={getOptions}
              multi={multi}
              className={className}
              {...other}
              onChange={this.handleInputChange.bind(this)}
            />
            : creatable ?
              <Creatable
                name={name}
                value={this.state.selectedValue}
                options={options}
                clearable={false}
                multi={multi}
                className={className}
                allowCreate
                {...other}
                onChange={this.handleInputChange.bind(this)}
              />
              :
              <Select
                name={name}
                value={this.state.selectedValue}
                options={options}
                clearable={false}
                multi={multi}
                className={className}
                {...other}
                onChange={this.handleInputChange.bind(this)}
              />
        }
      </InputSelectContainer>
    )
  }
}
