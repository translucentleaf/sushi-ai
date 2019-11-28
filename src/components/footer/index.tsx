import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #393e41;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 60px 0;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
`;

const BigText = styled.h1`
  font-size: 36px;
  font-weight: normal;
  margin: 0 0 0 0;
`;

const SmallText = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

const CopyRight = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterSection>
      <TextSection>
        <TextBlock>
          <BigText>Come in</BigText>
          <SmallText>471 Lafayette Ctr, Manchester, MO 63011</SmallText>
        </TextBlock>
        <TextBlock>
          <BigText>Call</BigText>
          <SmallText>(636) 527-9990</SmallText>
        </TextBlock>
        <TextBlock>
          <BigText>Questions</BigText>
          <SmallText>contact@sushiai.com</SmallText>
        </TextBlock>
      </TextSection>
      <CopyRight>Copyright Sushi Ai LLC. All rights reserved.</CopyRight>
    </FooterSection>
  );
};

export { Footer };
