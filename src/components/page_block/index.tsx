import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface WrapperProps {
  otherColor: boolean;
}

const PageBlockWrapper: AnyStyledComponent = styled.div<WrapperProps>`
  background-color: ${(props: WrapperProps): string =>
    props.otherColor ? "#393E41" : "transparent"};
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ContentProps {
  right: boolean;
}

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${(props: ContentProps): string =>
    props.right ? "row" : "row-reverse"};
  justify-content: center;
  align-items: center;
  margin: 1rem 50px;
  width: 80%;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 50px 0;
  }
`;

const TextSection = styled.div`
  margin: 80px 80px 80px 80px;
  width: 400px;

  @media (max-width: 1000px) {
    margin: 80px 40px 80px 40px;
    width: 250px;
  }

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
  }
`;

const HeaderText = styled.div`
  font-size: 48px;
  text-align: left;
  margin-bottom: 0.5rem;

  @media (max-width: 700px) {
    font-size: 32px;
    text-align: center;
    line-height: 99%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const SmallText = styled.div`
  font-size: 18px;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
    font-size: 16px;
  }
`;

interface ImageProps {
  img: string;
}

const Image = styled.div<ImageProps>`
  background: url(${(props: ImageProps): string => props.img}) center;
  background-size: cover;
  border-radius: 1px;
  height: 250px;
  width: 400px;
  margin: 80px 80px 80px 80px;

  @media (max-width: 1000px) {
    margin: 80px 40px 80px 40px;
    width: 250px;
  }

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
    width: 300px;
  }
`;

interface PageBlockProps {
  title: string;
  info: Array<string>;
  imgSource: string;
  right: boolean;
  otherColor: boolean;
}

const PageBlock: React.FC<PageBlockProps> = (props): JSX.Element => {
  const { title, info, imgSource, right, otherColor } = props;

  const details = info.map((element: any) => {
    return <SmallText>{element}</SmallText>;
  });

  return (
    <PageBlockWrapper otherColor={otherColor}>
      <Content right={right}>
        <TextSection>
          <HeaderText>{title}</HeaderText>
          <Details>{details}</Details>
        </TextSection>
        <Image img={imgSource} />
      </Content>
    </PageBlockWrapper>
  );
};

export { PageBlock };
