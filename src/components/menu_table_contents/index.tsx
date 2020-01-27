import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const TableWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 40px;
  width: 60%;

  @media (max-width: 700px) {
    width: 80vw;
  }
`;

const Title: AnyStyledComponent = styled.h1`
  font-size: 48px;
  font-weight: normal;
  margin: 0;
`;

const Desc: AnyStyledComponent = styled.p`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

const Divider: AnyStyledComponent = styled.hr`
  width: 100%;

  @media (max-width: 700px) {
    width: 80vw;
  }
`;

const SectionListWrapper: AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SectionItem: AnyStyledComponent = styled.a`
  width: 22rem;
  margin: 1rem 0;
  padding: 1rem;
  color: #ffffff;
  background-color: #72813a;
  border-radius: 5px;
  font-size: 24px;
  font-weight: normal;
  text-decoration: none;
`;

interface TableProps {
  name: string;
  sections: Array<string>;
}

const MenuTableOfContents: React.FC<TableProps> = (props): JSX.Element => {
  const { name, sections } = props;

  const sectionList = sections.map(element => {
    return <SectionItem href={`#${element}`}>{element}</SectionItem>;
  });

  return (
    <TableWrapper id={name}>
      <Title>Contents</Title>
      <Desc>Click to navigate to a certain section</Desc>
      <Divider />
      <SectionListWrapper>{sectionList}</SectionListWrapper>
    </TableWrapper>
  );
};

export { MenuTableOfContents };
