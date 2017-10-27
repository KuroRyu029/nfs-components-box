import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, tabStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
children:         element
tabHeaderClassName: text
tabContentClassName: text
------------------------------------------------------*/

const TabContainer = styled.div`
  // border: 1px solid ${props => props.theme.tabBorder ? props.theme.tabBorder : tabStyle.tabBorder};
`

const TabHeader = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.tabBorder ? props.theme.tabBorder : tabStyle.tabBorder};
  display: flex;
  overflow-x: scroll;
  > li {
    list-style-type: none;
    padding: 10px 15px;
    margin: 0 10px;
    cursor: pointer;
    color: ${props => props.theme.tabFontColor ? props.theme.tabFontColor : tabStyle.tabFontColor};
    &.active {
      border-bottom: 1px solid ${globalVariable.colorPrimary};
      color: ${props => props.theme.tabActiveFontColor ? props.theme.tabActiveFontColor : tabStyle.tabActiveFontColor};
    }
    .icon {
      font-size: 16px;
      margin-right: 8px;
    }
    @media only screen and (max-width: ${globalVariable.screenMobile}) {
      padding: 10px;
    }
  }
`

const TabContentContainer = styled.div`
  padding: 20px 15px;
`

export const TabContent = styled.div`
  // border: 1px solid red;
`

export default class Tab extends React.Component {
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
      <TabContainer>
        <TabHeader className={c(this.props.tabHeaderClassName)}>
          {
            this.props.children.map((data, index) => (
              <li
                role="presentation"
                className={c({ active: this.state.active === index })}
                onClick={() => this.handleClick(index)}
              >
                {
                  data.props.iconClass &&
                  <i className={c('icon', data.props.iconClass )} />
                }
                <span>{ data.props.title }</span>
              </li>
            ))
          }
        </TabHeader>
        <TabContentContainer className={c(this.props.tabContentClassName)}>
          {this.props.children[this.state.active]}
        </TabContentContainer>
      </TabContainer>
    )
  }
}
