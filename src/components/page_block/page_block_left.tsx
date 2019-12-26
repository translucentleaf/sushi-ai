import React from "react";
import styled from "styled-components";

const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  min-width: 700px;
  max-width: 1080px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextSection = styled.div`
  margin: 80px 0 80px 0;

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
  }
`;

const HeaderText = styled.div`
  font-size: 36px;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 80px 0 80px 0;

  @media (max-width: 700px) {
    margin: 20px 0 20px 0;
  }
`;

type PageBlockProps = {
  title: string;
  info: Array<string>;
  imgSource: string;
};

const PageBlockLeft: React.FC<PageBlockProps> = (props): JSX.Element => {
  const { title, info, imgSource } = props;

  const details = info.map((element: string) => {
    return <SmallText>{element}</SmallText>;
  });

  return (
    <InfoBlock>
      <Image src={imgSource} />
      <TextSection>
        <HeaderText>{title}</HeaderText>
        <Details>{details}</Details>
      </TextSection>
    </InfoBlock>
  );
};

export { PageBlockLeft };
