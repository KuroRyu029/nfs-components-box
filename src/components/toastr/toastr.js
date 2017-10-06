import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, toastrStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
type:             'succes', 'error'
title:            text,
message:          text
autoHide:         boolean
------------------------------------------------------*/

const ToastrContainer = styled.div`
  border-radius: ${toastrStyle.toastrBorderRadius};
  padding: 15px 20px;
  transition: opacity ${globalVariable.animateSlow} ease-in-out;
  margin: 10px 0;
  background: rgba(${toastrStyle.toastrInfoBg}, 0.9);
  color: ${toastrStyle.toastrColor};
  &:hover {
    background: rgba(${toastrStyle.toastrInfoBg}, 1);
  }
  &.hide {
    opacity: 0;
  }
  &.error {
    background: rgba(${globalVariable.colorRgbError}, 0.9);
    .title {
      i {
        // color: ${globalVariable.colorError};
      }
    }
    &:hover {
      background: rgba(${globalVariable.colorRgbError}, 1);
    }
  }
  &.success {
    background: rgba(${globalVariable.colorRgbSuccess}, 0.9);
    .title {
      i {
        // color: ${globalVariable.colorSuccess};
      }
    }
    &:hover {
      background: rgba(${globalVariable.colorRgbSuccess}, 1);
    }
  }
  .title {
    display: flex;
    align-items: end;
    font-size: 22px;
    font-family: 'CloudBold';
    > i {
      font-size: 24px;
    }
    > span {
      margin-left: 15px;
    }
  }
  .message {
    margin-top: 10px;
  }
`

export default class Toastr extends React.Component {
  constructor() {
    super()
    this.state = {
      hide: false,
      display: 'block',
    }
  }
  componentDidMount() {
    if (this.props.autoHide) {
      console.log('auto hide')
      this.AutoHideToastr()
    }
  }
  AutoHideToastr() {
    setTimeout(() => {
      this.setState({ hide: true })
    }, 30000)
  }
  handleToastClick() {
    this.setState({ hide: true })
    setTimeout(() => {
      this.setState({ display: 'none' })
    }, 600)
  }
  render() {
    return (
      <ToastrContainer
        className={c(this.props.type, { hide: this.state.hide }, this.props.className)}
        onClick={this.handleToastClick.bind(this)}
        style={{ display: this.state.display }}
        innerRef={(el) => { this.toastrContainer = el }}
      >
        <div className={c('title')}>
          {
            this.props.type === 'error' ?
              <i className={c('icon-close')} />
            : this.props.type === 'success' ?
              <i className={c('icon-check')} />
            : <i className={c('icon-info')} />
          }
          <span>{this.props.title}</span>
        </div>
        <div className={c('message')}>
          {this.props.message}
        </div>
      </ToastrContainer>
    )
  }
}
