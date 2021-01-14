import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

const StyledNoticeBar: AnyStyledComponent = styled.div`
  width: 100vw;
  background: #393e41;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 16px;
    text-align: center;
    margin: 1rem 0.5rem;
  }
`

const Notice = (): JSX.Element => (
  <StyledNoticeBar>
    <h1>
      Due to STL County restrictions, we are available for carry-out only. We
      apologize for the inconvenience.
    </h1>
  </StyledNoticeBar>
)

export { Notice }
