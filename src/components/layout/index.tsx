import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { AnyStyledComponent } from 'styled-components'

import Header from '../navbar'
import './normalize.css'
import './layout.css'

// FIXME: Vertical scrollbar appearing
const StyledPage: AnyStyledComponent = styled.div`
  background-color: #2c271d;
  color: #fff;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
`

const StyledMain: AnyStyledComponent = styled.main``

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledPage>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        <footer>
          {'© '}
          {new Date().getFullYear()}
          Built with Gatsby
        </footer>
      </StyledPage>
    </>
  )
}

export default Layout