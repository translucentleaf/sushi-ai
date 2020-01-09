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
  margin: 0 50px;
  width: 80vw;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    maxwidth: 90%;
    margin: 50px 0;
  }
`;

const TextSection = styled.div`
  margin: 80px 100px 80px 100px;

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
  }
`;

const HeaderText = styled.div`
  font-size: 36px;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
    line-height: 99%;

    margin-bottom: 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
`;

const SmallText = styled.div`
  font-size: 18px;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Image = styled.img`
  background: white;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  margin: 80px 100px 80px 100px;

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
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
        <Image src={imgSource} />
      </Content>
    </PageBlockWrapper>
  );
};

export { PageBlock };
