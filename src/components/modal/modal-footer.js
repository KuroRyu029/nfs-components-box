import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

const c = classnames.bind(styled)

/*------------------------------------------------------
left:             boolean
center:           boolean
------------------------------------------------------*/

const ModalFooter = styled.div`
  text-align: right;
  > button {
    margin: 0 0 0 15px;
  }
  &.left {
    text-align: left;
    > button {
      margin: 0 15px 0 0;
    }
  }
  &.center {
    text-align: center;
    > button {
      margin: 0 7.5px;
    }
  }
`

export default ({ children, left, center, className }) => (
  <ModalFooter className={c({ left: left, center: center }, className)}>{children}</ModalFooter>
)
