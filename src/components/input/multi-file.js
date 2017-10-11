import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import Button from './../button/button'
import { globalVariable, multiFileStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
getFile:      fn
------------------------------------------------------*/

const MultiFileContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${globalVariable.screenTablet}) {
    flex-direction: column;
  }
`

const InputFile = styled.div`
  display: flex;
  flex-basis: 100%;
`

const FileList = styled.div`
  flex-basis: 100%;
  padding-left: 15px;
  max-height: 310px;
  overflow-y: scroll;
  @media only screen and (max-width: ${globalVariable.screenTablet}) {
    padding-left: 0;
    margin-top: 15px;
  }
  &.hide {
    display: none;
  }
  > div {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Label = styled.label`
  width: 100%;
  min-height: 300px;
  cursor: pointer;
  border: 2px dashed ${props => (props.theme.multipleInputBorderColor ? props.theme.multipleInputBorderColor : multiFileStyle.multipleInputBorderColor)};
  border-radius: ${globalVariable.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: inline-block;
    text-align: center;
    > div {
      i {
        font-family: 'simple-line-icons';
        font-size: 60px;
        color: ${props => (props.theme.multipleInputLogoColor ? props.theme.multipleInputLogoColor : multiFileStyle.multipleInputLogoColor)};
      }
      margin-bottom: 15px;
    }
    > span {
      color: ${props => (props.theme.multipleInputColor ? props.theme.multipleInputColor : multiFileStyle.multipleInputColor)};
      font-size: 20px;
    }
  }
  + input[type='file'] {
    display: none;
  }
`

const FileName = styled.div`
  border-bottom: 1px solid ${props => (props.theme.multipleInputColor ? props.theme.multipleInputColor : multiFileStyle.multipleInputColor)};
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 20px;
  margin: 5px 0 20px 0;
  position: relative;
  > button {
    display: none;
  }
  @media only screen and (max-width: ${globalVariable.screenMobile}) {
    > button {
      display: block;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
  }
  > div {
    display: flex;
    align-items: baseline;
    @media only screen and (max-width: ${globalVariable.screenMobile}) {
      padding-bottom: 35px;
    }
    .icon-upload-result {
      font-size: 18px;
      color: ${globalVariable.colorSuccess};
    }
    .filename {
      margin: 0 10px;
      color: ${props => (props.theme.multipleInputFileNameColor ? props.theme.multipleInputFileNameColor : multiFileStyle.multipleInputFileNameColor)};
    }
    &.error {
      opacity: 0.4;
      .icon-upload-result {
        color: ${globalVariable.colorError};
      }
      @media only screen and (max-width: ${globalVariable.screenMobile}) {
        padding-bottom: 25px;
        + .error-message {
          position: absolute;
          bottom: 5px;
          right: 0;
          font-size: 16px;
        }
      }
    }
  }
  .upload-remove {
    cursor: pointer;
    color: ${props => (props.theme.multipleInputRemoveColor ? props.theme.multipleInputRemoveColor : multiFileStyle.multipleInputRemoveColor)};
    &:hover {
      color: ${props => (props.theme.multipleInputRemoveHoverColor ? props.theme.multipleInputRemoveHoverColor : multiFileStyle.multipleInputRemoveHoverColor)};
    }
    @media only screen and (max-width: ${globalVariable.screenMobile}) {
      display: none;
    }
  }
  .error-message {
    color: ${globalVariable.colorError};
    font-size: 14px;
  }
`

export default class MultiFileUpload extends React.Component {
  constructor() {
    super()
    this.state = {
      hideFileList: true,
      fileList: [],
    }
  }
  componentDidMount() {
    this.dropZone.addEventListener('dragover', this.handleOnDragOver.bind(this))
    this.dropZone.addEventListener('drop', this.handleOnDrop.bind(this))
  }
  handleOnDragOver(evt) {
    evt.preventDefault()
    evt.stopPropagation()
  }
  handleOnDrop(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    const fileList = this.createNewList(evt.dataTransfer.files)
    if (fileList !== null && this.props.getFile) {
      this.props.getFile(fileList)
    }
    return false
  }
  handleSelectChange(evt) {
    this.setState({ hideFileList: false })
    const fileList = this.createNewList(evt.target.files)
    if (fileList !== null && this.props.getFile) {
      this.props.getFile(fileList)
    }
  }
  createNewList(files) {
    const newFileList = [...this.state.fileList]
    const arrayFileList = Object.entries(files)
    arrayFileList.map((file, index) => {
      if (typeof file === 'object') {
        let fileData = {}
        if (index % 2 === 0) {
          fileData = { file: file[1], name: file[1].name, status: false, message: 'File is too large' }
        } else {
          fileData = { file: file[1], name: file[1].name, status: true }
        }
        newFileList.unshift(fileData)
      }
      return true
    })
    if (newFileList !== null) {
      this.setState({ fileList: newFileList, hideFileList: false })
      return newFileList
    } else {
      return null
    }
  }
  removeFile(evt) {
    const newFileList = [...this.state.fileList]
    newFileList.splice(evt.target.getAttribute('data-index'), 1)
    this.setState({ fileList: newFileList })
    if (this.props.getFile) {
      this.props.getFile(newFileList)
    }
  }
  render() {
    const { className, ...other } = this.props
    return (
      <MultiFileContainer>
        <InputFile>
          <Label htmlFor="img" innerRef={(el) => { this.dropZone = el }} className={c(className)}>
            <div>
              <div><i className={c('icon-drawer')} /></div>
              <span>Click or Drag files to upload</span>
            </div>
          </Label>
          <input type="file" id="img" name="img" multiple onChange={(evt) => { this.handleSelectChange(evt) }} {...other} />
        </InputFile>
        <FileList className={c({ hide: this.state.hideFileList })}>
          {
            this.state.fileList.map((data, index) => (
              <FileName key={data.name}>
                <div className={c('file-upload', { error: !data.status })}>
                  <i className={c('icon-upload-result', 'icon-check', { 'icon-close': !data.status })} />
                  <span className={c('filename')}>{data.name}</span>
                </div>
                {
                  data.status ?
                    <i data-index={index} role="presentation" onClick={(evt) => { this.removeFile(evt) }} className={c('upload-remove', 'icon-trash')} />
                    : <span className={c('error-message')}>{data.message}</span>
                }
                {
                  data.status &&
                  <Button buttonStyle="outline" small onClick={(evt) => { this.removeFile(evt) }}>Remove</Button>
                }
              </FileName>
            ))
          }
        </FileList>
      </MultiFileContainer>
    )
  }
}
