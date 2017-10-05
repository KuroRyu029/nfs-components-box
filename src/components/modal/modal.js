import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, modalStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
show:             boolean
hideOnClickBg:    boolean
------------------------------------------------------*/

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(${modalStyle.modalContainerBg}, ${modalStyle.modalContainerBgOpacity});
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  padding: 20px;
  border-radius: ${modalStyle.modalContentBorderRadius};
  background: ${props => props.theme.modalContentBg ? props.theme.modalContentBg : modalStyle.modalContentBg};
  color: ${props => props.theme.modalContentFontColor ? props.theme.modalContentFontColor : modalStyle.modalContentFontColor};
  box-shadow: 0 0 20px ${props => props.theme.modalContentShadow ? props.theme.modalContentShadow : modalStyle.modalContentShadow};
  width: 50%;
  .header {
    position: relative;
    .close-icon {
      position: absolute;
      right: 0;
      top: 0;
      color: ${modalStyle.modalCloseIconColor};
      cursor: pointer;
    }
    @media only screen and (max-width: ${globalVariable.screenMobile}) {
      h3 {
        padding-top: 35px;
      }
    }
  }
`

export default class Modal extends React.Component {
  constructor(props) {
    super()
    this.state = {
      modalShow: props.show,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ modalShow: nextProps.show })
  }
  hideModal() {
    this.setState({ modalShow: false })
  }

  handleClick(evt) {
    if (!this.modalContentRef.contains(evt.target)) {
      this.setState({ modalShow: false })
    }
  }
  render() {
    return (
      <ModalContainer show={this.state.modalShow} onClick={this.props.hideOnClickBg ? (evt) => { this.handleClick(evt) } : ''}>
        <ModalContent
          innerRef={(modalContentComponent) => { this.modalContentRef = modalContentComponent }}
          className={c(this.props.className)}
        >
          <div className={c('header')}>
            <h3>{this.props.title}</h3>
            <span role="presentation" className={c('close-icon')} onClick={() => this.hideModal()}><i className={c('icon-close')} /></span>
          </div>
          {this.props.children}
        </ModalContent>
      </ModalContainer>
    )
  }
}
