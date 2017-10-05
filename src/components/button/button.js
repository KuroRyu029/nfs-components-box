
import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { buttonTheme } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
type:           'sideRound', 'circleIcon', 'squareIcon'
buttonStyle:    'outline'
color:          'dark', 'gray'
disabled:       boolean
onlyIcon:       boolean
------------------------------------------------------*/

const BasicButton = styled.button`
  border-radius: ${buttonTheme.buttonButtonRadius};
  padding: 10px 20px;
  background: ${buttonTheme.buttonBgDefault};
  border: 1px solid ${buttonTheme.buttonBgDefault};
  color: white;
  font-family: 'CloudLight';
  font-size: 16px;
  line-height: 0.9;
  &.small {
    padding: 8px 16px;
    font-size: 12px;
  }
  &.large {
    padding: 12px 24px;
    font-size: 18px;
  }
  &:hover {
    cursor: pointer;
    background: ${buttonTheme.buttonBgHoverDefault};
    border: 1px solid ${buttonTheme.buttonBgHoverDefault};
  }
  &:focus,
  &:active {
    outline: 0;
    background: ${buttonTheme.buttonBgHoverDefault};
    border: 1px solid ${buttonTheme.buttonBgHoverDefault};
  }
  &.dark {
    background: ${buttonTheme.buttonBgDark};
    border: 1px solid ${buttonTheme.buttonBgDark};
    &:hover {
      background: ${buttonTheme.buttonBgHoverDark};
    }
  }
  &.gray {
    background: ${buttonTheme.buttonBgGray};
    border: 1px solid ${buttonTheme.buttonBgGray};
    &:hover {
      background: ${buttonTheme.buttonBgHoverGray};
    }
  }
  &.outline {
    background: transparent;
    border: 1px solid;
    border-color: ${buttonTheme.buttonBgDefault};
    color: ${buttonTheme.buttonBgDefault};
    &:hover {
      background: transparent;
      color: ${buttonTheme.buttonBgHoverDefault};
      border-color: ${buttonTheme.buttonBgHoverDefault};
    }
    &.dark {
      border-color: ${buttonTheme.buttonBgDark};
      color: ${buttonTheme.buttonBgDark};
      &:hover {
        border-color: ${buttonTheme.buttonBgHoverDark};
        color: ${buttonTheme.buttonBgHoverDark};
      }
    }
    &.gray {
      border-color: ${buttonTheme.buttonBgGray};
      color: ${buttonTheme.buttonBgGray};
      &:hover {
        border-color: ${buttonTheme.buttonBgHoverGray};
        color: ${buttonTheme.buttonBgHoverGray};
      }
    }
  }
  &.sideRound {
    border-radius: 30px;
  }
  &.circleIcon {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0;
  }
  &.squareIcon {
    padding: 8px 11px;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${buttonTheme.buttonFontDisabled} !important;
    background: ${buttonTheme.buttonBgDisabled} !important;
    border: none;
  }
  > span {
    > i {
      margin-right: 10px;
    }
    &.icon-right {
      > i {
        margin-left: 10px;
        margin-right: 0;
      }
    }
  }
  > i {
    font-size: 16px;
  }
`

export default class Button extends React.Component {
  render() {
    return (
      <BasicButton
        className={
          c(this.props.type,
            this.props.buttonStyle,
            this.props.color,
            { large: this.props.large },
            { small: this.props.small },
            this.props.className
          )
        }
        disabled={this.props.disabled}
        {...this.props}
      >
        {
          (this.props.onlyIcon && this.props.iconName) ?
            <i className={c('icon', this.props.iconName)} />
          : this.props.iconName ?
            this.props.iconRight ?
              <span className={c('icon-right')}>
                { this.props.children }
                <i className={c('icon', this.props.iconName)} />
              </span>
            :
              <span>
                <i className={c('icon', this.props.iconName)} />
                { this.props.children }
              </span>
          : this.props.children
        }
      </BasicButton>
    )
  }
}
