import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, progressStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
progressOuterClassName:  text
progressBarClassName:    text
------------------------------------------------------*/

const ProgressBar = styled.div`
  background-color: ${progressStyle.progressBg};
  border-radius: ${progressStyle.progressBorderRadius};
  margin: 10px;
  height: 14px;
  display: flex;
  &.large {
    height: 20px;
  }
  &.small {
    height: 6px;
  }
`

const Progress = styled.div`
  background-color: ${progressStyle.progressBarColor};
  border-top-left-radius: ${progressStyle.progressBorderRadius};  
  border-bottom-left-radius: ${progressStyle.progressBorderRadius};
  border-top-right-radius: ${props => props.valueNow === '100%' && progressStyle.progressBorderRadius}; 
  border-bottom-right-radius: ${props => props.valueNow === '100%' && progressStyle.progressBorderRadius}; 
  width: ${props => props.valueNow};
  transition: all .5s ease;

  &.animated {
    background-image: linear-gradient(
      -45deg, 
      rgba(255, 255, 255, .2) 25%, 
      transparent 25%, 
      transparent 50%, 
      rgba(255, 255, 255, .2) 50%, 
      rgba(255, 255, 255, .2) 75%, 
      transparent 75%, 
      transparent
    );
    z-index: 1;
    background-size: 40px 40px;
    animation: move 2.2s linear infinite;
    overflow: hidden;
  }
  
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 40px 40px;
    }
`

export default ({ large, small, valueNow, animated, progressOuterClassName, progressBarClassName }) => (
  <ProgressBar
    className={c({ large: large, small: small }, progressOuterClassName)}
  >
    <Progress
      className={c({ animated: animated }, progressBarClassName)}
      valueNow={valueNow}
    />
  </ProgressBar>
)
