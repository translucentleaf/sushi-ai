import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'
import { ButtonLarge } from '../button_large'

interface BannerStyleProps {
  image: string
}

const BannerBox: AnyStyledComponent = styled.div<BannerStyleProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props): string => props.image});
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const BannerText: AnyStyledComponent = styled.h1`
  font-size: 48px;
  font-weight: normal;
  max-width: 612px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 36px;
    max-width: 250px;
  }
`

const Buttons: AnyStyledComponent = styled.div`
  display: flex;

  div {
    margin: 0 40px 0 40px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 110px;
  }
`

type BannerProps = {
  image: string
  text: string
}

const HomeBanner: React.FC<BannerProps> = (props): JSX.Element => {
  const { image, text } = props

  return (
    <BannerBox image={image}>
      <BannerText>{text}</BannerText>
      <Buttons>
        <ButtonLarge text="Menu" link="/menu" />
        <ButtonLarge text="Find Us" link="/find-us" />
      </Buttons>
    </BannerBox>
  )
}

export { HomeBanner }
