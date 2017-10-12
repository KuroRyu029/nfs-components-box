import React, { Component } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, sidebarStyle } from './../../const/theme'
import MenuList from './../../const/menu'

const c = classnames.bind(styled)

export const TabContent = styled.div`
  border-bottom: 1px solid ${props => (props.theme.sideBarTabBorderColor ? props.theme.sideBarTabBorderColor : sidebarStyle.sideBarTabBorderColor)};
  padding: 20px 25px;
  color: ${props => (props.theme.sideBarFontColor ? props.theme.sideBarFontColor : sidebarStyle.sideBarFontColor)};
  font-size: 22px;
  cursor: pointer;
  > div {
    transition: all ${globalVariable.animateNormal} ease-in-out;
  }
  &.active {
    background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
    color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
    > div {
      transform: translateX(10px);
      font-weight: 600;
    }
  }
  &:hover {
    background: ${props => (props.theme.sideBarHover ? props.theme.sideBarHover : sidebarStyle.sideBarHover)};
    color: ${props => (props.theme.sideBarFontColorHover ? props.theme.sideBarFontColorHover : sidebarStyle.sideBarFontColorHover)};
    > div {
      transform: translateX(10px);
      font-weight: 600;
    }
  }
`
const TabWrapper = styled.div`
  width: 250px;
  // height: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => (props.theme.sideBarBg ? props.theme.sideBarBg : sidebarStyle.sideBarBg)};
  border: 1px solid red;
`
const IconContainer = styled.i`
  font-size: 18px;
  padding-right: 15px;
`

export const SidebarHeader = styled.div`
  border: 1px solid blue;
`

const SidebarFooter = styled.div`
  margin-top: 50px;
`
// const SidebarHeader = styled.div`
//   border: 1px solid red;
// `

// const SidebarContent = (props) => (
//   <SidebarHeader>
//     {props.children}
//   </SidebarHeader>
// )

// export { SidebarContent }

export default class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      active: 0,
    }
  }
  handleClick(index) {
    this.setState({ active: index })
  }
  render() {
    return (
      <TabWrapper>
        <SidebarHeader>
          {
            // this.props.children
          }
          { 
            // MenuList.map((item, index) => (
            //   <TabContent
            //     index={index}
            //     className={c({ active: (this.state.active === index) })}
            //     onClick={() => this.handleClick(index)}
            //   >
            //     <div role="presentation">
            //       <IconContainer className={c('icon-fire')} />
            //       {item}
            //     </div>
            //   </TabContent>
            // ))
            MenuList.map(({ name, link, iconClass }, index) => (
              <TabContent>
                <div role="presentation">
                  {
                    iconClass &&
                    <IconContainer className={c(iconClass)} />
                  }
                  {
                    name
                  }
                </div>
              </TabContent>
            ))
          }
        </SidebarHeader>
        <SidebarFooter>
          <div>
            <p>Footer</p>
          </div>
        </SidebarFooter>
      </TabWrapper>
    )
  }
}
