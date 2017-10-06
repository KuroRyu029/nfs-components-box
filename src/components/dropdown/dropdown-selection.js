import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, inputStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
large:            boolean
small:            boolean
selectedText:     text
placeholder:      text
itemClassName:    text
------------------------------------------------------*/

const DropdownSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DropdownSelectionBox = styled.div`
  border-radius: ${globalVariable.borderRadius};
  border: 1px solid ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
  padding: 10px 15px;
  color: ${props => props.theme.inputColor ? props.theme.inputColor : inputStyle.inputColor};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.no-selected-text {
    color: ${props => props.theme.inputPlaceholderColor ? props.theme.inputPlaceholderColor : inputStyle.inputPlaceholderColor};
  }
  &.large {
    font-size: ${globalVariable.eleLargeFontSize};
    padding: 15px 20px;
    + ul {
      > li {
        font-size: ${globalVariable.eleLargeFontSize};
        padding: 15px 20px;
      }
    }
  }
  &.small {
    font-size: ${globalVariable.eleSmallFontSize};
    padding: 5px 10px;
    + ul {
      > li {
        font-size: ${globalVariable.eleSmallFontSize};
        padding: 5px 10px;
      }
    }
  }
`

const DropdownSelectionItem = styled.ul`
  margin: 5px 0 0;
  padding: 0;
  max-height: 0;
  opacity: 0;
  transition: max-height ${globalVariable.animateSlow} ease-out;
  border: 1px solid ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
  border-radius: 3px;
  overflow: scroll;
  &.active {
    opacity: 1;
    height: auto;
    max-height: 211px;
  }
  > li {
    border: 1px solid transparent;
    border-bottom-color: ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
    list-style-type: none;
    padding: 10px 15px;
    cursor: pointer;
    &.disabled {
      color: ${inputStyle.inputDisabledColor};
      background: ${inputStyle.inputDisabledBg};
    }
    &:first-child {
      border-radius: 3px 3px 0 0;
    }
    &:last-child {
      border-radius: 0 0 3px 3px;
      border-bottom: 1px solid transparent;
    }
    &:not(.disabled):hover {
      border: 1px solid ${globalVariable.colorSuccess};
      box-shadow: 0 0 10px ${props => props.theme.inputShadow ? props.theme.inputShadow : inputStyle.inputShadow};
    }
  }
`

export default class DropdownSelection extends React.Component {
  constructor(props) {
    super()
    this.state = {
      toggle: false,
      selectedText: props.selectedText,
    }
  }
  setSelectedText(text) {
    this.setState({ selectedText: text }, this.toggle())
  }
  toggle() {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <DropdownSelectionContainer>
        <DropdownSelectionBox
          className={c({ 'no-selected-text': this.state.selectedText === '', large: this.props.large, small: this.props.small }, this.props.className)}
          onClick={() => this.toggle()}
        >
          {this.state.selectedText ? this.state.selectedText : this.props.placeholder}
          {
            !this.state.selectedText && <i className={c('icon-arrow-down')} />
          }
        </DropdownSelectionBox>
        <DropdownSelectionItem
          className={c({ active: this.state.toggle }, this.props.itemClassName)}
        >
          {
            this.props.content.map(data => (
              <li role="presentation" className={c({ disabled: data.disabled })} onClick={() => this.setSelectedText(data.value)}>{data.title}</li>
            ))
          }
        </DropdownSelectionItem>
      </DropdownSelectionContainer>
    )
  }
}
