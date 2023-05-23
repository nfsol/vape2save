import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import { useNavigate } from "react-router-dom";
const CardContainer = styled.section`
  margin: 2%;
  margin-top: 0;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#0b1b18;
  border-radius:25px;
`;
const CardTitle=styled.h3`
margin-top:2%;
line-height:1.8;
border-bottom: 2px solid white;
`
const CardText = styled.article`
  max-width: 70%;
  text-align:center;
  line-height:1.15;
  margin-bottom:10%;

`;
const InnerContainer = styled.div`
  margin: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ArrowBumpers = styled(Icon)`
  font-size: 3em;
`;
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      <CardTitle>{props.card.title}</CardTitle>
      <InnerContainer>
        <ArrowBumpers
          icon="material-symbols:arrow-back-rounded"
          style={{display:props.currentCard == 0 ? 'none' : ''}}
          onClick={() => {
            if (props.currentPage > 0) {
              props.changePage(props.currentPage - 1);
            } else navigate(-1)
          }}
        />
        <CardText>{props.card.content}</CardText>
        <ArrowBumpers
          icon="material-symbols:arrow-forward-rounded"
          onClick={() => {
            if (props.currentPage < 3) {
              props.changePage(props.currentPage + 1);
            } else navigate('/info')
          }}
        />
      </InnerContainer>
    </CardContainer>
  );
};
export const Flipcard = (props) => {
  const [currentCard, setCurrentCard] = useState(0);
  return (
    <Card
      card={props.cardContents[currentCard]}
      changePage={setCurrentCard}
      currentPage={currentCard}
      length={props.cardContents.length}
    ></Card>
  );
};
