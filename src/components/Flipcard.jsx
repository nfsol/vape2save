import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Card = (props) => {
  return (
    <section>
      <h2>{props.card.title}</h2>
      <div className="innerContainer">
        <Icon
          icon="material-symbols:arrow-back-rounded"
          onClick={() => {
            if (props.currentPage > 0) {
              props.changePage(props.currentPage - 1);
            }
          }}
        />
        <h4>{props.card.content}</h4>
        <Icon
          icon="material-symbols:arrow-forward-rounded"
          onClick={() => {
            if (props.currentPage < 3) {
              props.changePage(props.currentPage + 1);
            }
          }}
        />
      </div>
    </section>
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
