import React from 'react'
import classnames from 'classnames'
import styled, { keyframes } from 'styled-components'
import { globalVariable, progressStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
progressOuterClassName:  text
progressBarClassName:    text
percentClassName:        text
------------------------------------------------------*/

const ProgressBar = styled.div`
  background-color: ${progressStyle.progressBg};
  border-radius: ${progressStyle.progressBorderRadius};
  margin: 15px;
  height: 14px;
  display: flex;
  ${props => props.large && `
    height: 20px;
  `}
  ${props => props.small && `
    height: 7px;
  `}
`

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 40px;
  }
`

const Progress = styled.div`
  background-color: ${props => props.customColor || progressStyle.progressBarColor};
  border-top-left-radius: ${progressStyle.progressBorderRadius};  
  border-bottom-left-radius: ${progressStyle.progressBorderRadius};
  border-top-right-radius: ${props => props.valueNow === '100%' && progressStyle.progressBorderRadius}; 
  border-bottom-right-radius: ${props => props.valueNow === '100%' && progressStyle.progressBorderRadius}; 
  width: ${props => props.valueNow};
  transition: all .5s ease;
  position: relative;

  ${props => props.animated && `
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
    background-size: 40px 40px;
    animation: ${loading} 2.2s linear infinite;
  `}
`

const Percent = styled.span`
  position: absolute;
  font-size: 12px;
  right: 0;
  top: -90%;
  visibility: ${props => (props.showPercent ? 'visible' : 'hidden')};
  
  ${props => props.large && `
    top: -70%;
    font-size: 14px;
  `}
  ${props => props.small && `
    top: -180%;
    font-size: 11px;    
  `}
`

export default ({ large, small, valueNow, animated, showPercent, customColor, progressOuterClassName, progressBarClassName, percentClassName }) => (
  <ProgressBar
    className={c(progressOuterClassName)}
    large={large}
    small={small}
  >
    <Progress
      className={c(progressBarClassName)}
      valueNow={valueNow}
      animated={animated}
      customColor={customColor}
    >
      <Percent
        className={c(percentClassName)}
        showPercent={showPercent}
        large={large}
        small={small}
      >
        {valueNow}
      </Percent>
    </Progress>
  </ProgressBar>
)
