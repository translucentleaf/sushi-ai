import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

interface StylePriceProps {
  price: string
}

const SectionTitleWrapper: AnyStyledComponent = styled.div<StylePriceProps>`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  justify-content: ${(props): string =>
    props.price === 'None' ? 'center' : 'space-between'};
  width: 100%;

  h1 {
    font-size: 48px;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 36px;
    }

    p {
      max-width: 80vw;
    }
  }
`

const TitleDescWrapper: AnyStyledComponent = styled.div<StylePriceProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props): string =>
    props.price === 'None' ? 'center' : 'flex-start'};

  @media (max-width: 700px) {
    width: 80vw;
    align-items: flex-start;
    text-align: left;
  }
`

interface TitleProps {
  title: string
  desc?: string
}

const SectionTitle: React.FC<TitleProps> = ({ title, desc }) => {
  return (
    <SectionTitleWrapper id={title}>
      <TitleDescWrapper>
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : null}
      </TitleDescWrapper>
    </SectionTitleWrapper>
  )
}

export { SectionTitle }
