import React from 'react'
import styled from 'styled-components'
import { globalVariable, sidebarStyle } from './../../const/theme'

export const MenuItem = styled.a`
  border-bottom: 1px solid ${props => (props.theme.sideBarTabBorderColor ? props.theme.sideBarTabBorderColor : sidebarStyle.sideBarTabBorderColor)};
  padding: 20px;
  cursor: pointer;
  display: block;
  transition: all ${globalVariable.animateNormal} ease-in-out;
  text-decoration: none;
  color: ${props => (props.theme.sideBarFontColor ? props.theme.sideBarFontColor : sidebarStyle.sideBarFontColor)};
  font-size: 20px;
  line-height: 0.9;
  display: flex;
  aling-items: flex-end;
  &.active {
    background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
    color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
    margin-left: 10px;
    font-weight: 600;
  }
  &:hover {
    background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
    color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
    padding-left: 40px;
    font-weight: 600;
  }
`

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => (props.theme.sideBarBg ? props.theme.sideBarBg : sidebarStyle.sideBarBg)};
`
export const Icon = styled.i`
  font-size: 18px;
  padding-right: 15px;
`

export const SidebarHeader = styled.div`
`

export const SidebarFooter = styled.div`
  margin-top: 30px;
  padding: 20px;
  font-size: 16px;
  color: ${props => (props.theme.sideBarFontColor ? props.theme.sideBarFontColor : sidebarStyle.sideBarFontColor)};
`

export const Sidebar = ({ children }) => (
  <TabWrapper>
    {children}
  </TabWrapper>
)
