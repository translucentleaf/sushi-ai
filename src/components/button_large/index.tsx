import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

const ButtonStyle: AnyStyledComponent = styled.div`
  border: solid #ffffff 3px;
  border-radius: 8px;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 35px;
  }
`

const Text: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 24px;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`

type ButtonTypes = {
  text: string
  link: string
}

const ButtonLarge: React.FC<ButtonTypes> = (props): JSX.Element => {
  const { text, link } = props

  return (
    <ButtonStyle>
      <Text href={link}>{text}</Text>
    </ButtonStyle>
  )
}

export { ButtonLarge }
