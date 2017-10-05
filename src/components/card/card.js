import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { cardStyle } from './../../const/theme'

const c = classnames.bind(styled)

const Card = styled.div`
  padding: 20px;
  display: inline-block;
  border-radius: ${cardStyle.cardBorderRadius};
  background: ${props => props.theme.cardBg ? props.theme.cardBg : cardStyle.cardBg};
  color: ${props => props.theme.cardFontColor ? props.theme.cardFontColor : cardStyle.cardFontColor};
  box-shadow: 0 0 3px ${props => props.theme.cardShadow ? props.themecardShadow : cardStyle.cardShadow};
`

export default ({ children, className }) => (
  <Card className={c(className)}>{children}</Card>
)
