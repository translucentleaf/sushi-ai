import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextSection = styled.div`
  margin: 80px 0 80px 0;
`;

const HeaderText = styled.div`
  font-size: 36px;
  text-align: right;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.div`
  font-size: 18px;
  text-align: right;
`;

const Divider = styled.div`
  background: transparent;
  min-width: 200px;
`;

const Image = styled.img`
  background: white;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  margin: 80px 0 80px 0;
`;

type PageBlockProps = {
  imgSide: string;
  title: string;
  info: Array<string>;
};

// TODO: Add img source prop
const PageBlock: React.FC<PageBlockProps> = (props): JSX.Element => {
  const { imgSide, title, info } = props;

  const details = info.map((element: any) => {
    return <SmallText>{element}</SmallText>;
  });

  return (
    <Block>
      <TextSection>
        <HeaderText>{title}</HeaderText>
        <Details>{details}</Details>
      </TextSection>
      <Divider />
      <Image />
      <h1>{imgSide}</h1>
    </Block>
  );
};

export { PageBlock };
