import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

const c = classnames.bind(styled)

/*------------------------------------------------------
------------------------------------------------------*/

const ModalContent = styled.div`
  margin: 30px 0 20px 0;
`

export default ({ children, className }) => (
  <ModalContent className={c(className)}>{children}</ModalContent>
)
