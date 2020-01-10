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

const Divider: AnyStyledComponent = styled.hr`
  width: 100%;

  @media (max-width: 700px) {
    width: 80vw;
  }
`;

const SectionItem: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 24px;
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
      <Divider />
      {sectionList}
    </TableWrapper>
  );
};

export { MenuTableOfContents };
