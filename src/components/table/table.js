import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { globalVariable, tableStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------

------------------------------------------------------*/

const TableContainer = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.tableBorder ? props.theme.tableBorder : tableStyle.tableBorder};
  overflow-x: scroll;
`

const TableTag = styled.table`
  width: 100%;
  border-collapse: collapse;
  > tr {
    border: 1px solid transparent;
    border-bottom: none;
    &:not(.header) {
      &:nth-child(2){
        border-top: 2px solid ${props => props.theme.tableBorder ? props.theme.tableBorder : tableStyle.tableBorder};
      }
      &:hover {
        border: 1px solid ${globalVariable.colorPrimary};
        box-shadow: 0 0 10px ${props => props.theme.tableShadow ? props.theme.tableShadow : tableStyle.tableShadow};
      }
    }
    > td {
      padding: 15px 15px;
      &:first-child {
        padding-left: 25px;
      }
      &:last-child {
        padding-right: 25px;
      }
    }
    &.header {
      color: ${props => props.theme.tableHeaderFontColor ? props.theme.tableHeaderFontColor : tableStyle.tableHeaderFontColor};
      > th {
        padding: 15px;
        background: ${props => props.theme.tableHeaderBg ? props.theme.tableHeaderBg : tableStyle.tableHeaderBg};
        text-align: left;
        font-size: 18px;
        font-weight: normal;
        &:first-child {
          padding-left: 25px;
        }
        &:last-child {
          padding-right: 25px;
        }
      }
    }
  }
`

export default class Table extends React.Component {
  render() {
    return (
      <TableContainer>
        <TableTag className={c(this.props.className)}>
          <tr className={c('header')}>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </TableTag>
      </TableContainer>
    )
  }
}
