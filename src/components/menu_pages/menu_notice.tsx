import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const NoticeText: AnyStyledComponent = styled.div`
  width: 60%;
  text-align: left;
  margin-top: 2rem;

  @media (max-width: 1000px) {
    width: 80vw;

    h2 {
      font-size: 20px;
    }
  }
`;

interface MenuNoticeProps {
  lunch: boolean;
}

const MenuNotice: React.FC<MenuNoticeProps> = ({ lunch }) => {
  return (
    <NoticeText>
      <h2>
        Notice: Sushi Ai Manchester is currently take-out only. Please call in
        your order if you want to place a custom order or order online.
      </h2>
      {lunch ? (
        <>
          <h2>
            The to-go option for all-you-can-eat lunch includes 2 rolls, 2 pcs
            sushi, and 1 appetizer.
          </h2>
          <h2>
            Lunch all you can eat is $12.99 for standard and $15.99 for premium
            (additional) items.
          </h2>
        </>
      ) : (
        <>
          <h2>
            The to-go option for all-you-can-eat lunch includes 3 rolls, 4 pcs
            sushi, and 1 appetizer.
          </h2>
          <h2>
            Dinner all you can eat is $19.98 for standard and is an additional
            +$4.98 for premium (additional) items.
          </h2>
        </>
      )}
    </NoticeText>
  );
};

export { MenuNotice };
