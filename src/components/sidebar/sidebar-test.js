import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, sidebarStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
children:         element
tabHeaderClassName: text
tabContentClassName: text
------------------------------------------------------*/

const SidebarContainer = styled.div`
  display: flex;
`

const LeftSidebar = styled.div`
  background: ${props => (props.theme.sideBarBg ? props.theme.sideBarBg : sidebarStyle.sideBarBg)};
  min-width: 250px;
  a {
    display: flex;
    border-bottom: 1px solid ${props => (props.theme.sideBarTabBorderColor ? props.theme.sideBarTabBorderColor : sidebarStyle.sideBarTabBorderColor)};
    padding: 25px;
    color: ${props => (props.theme.sideBarFontColor ? props.theme.sideBarFontColor : sidebarStyle.sideBarFontColor)};
    font-size: 22px;
    cursor: pointer;
    line-height: 1;
    // transition: all ${globalVariable.animateNormal} ease-in-out;
    i {
      font-size: 18px;
      padding-right: 15px;
    }
    &:hover {
      background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
      color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
      font-weight: 600;
    }
    &.active {
      background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
      color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
      > div {
        transform: translateX(10px);
        font-weight: 600;
      }
    }
  }
`

const RightContent = styled.div`
  display: flex;
  flex-grow: 1;
`

export default class SidebarTest extends React.Component {
  render() {
    return(
      <SidebarContainer>
        <LeftSidebar>
          { this.props.sidebarContent }
        </LeftSidebar>
        <RightContent>
          { this.props.children }
        </RightContent>
      </SidebarContainer>
    )
  }
}