import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import cloud from "../assets/cloud.jpg";
const OverlaidImage = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${cloud});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ResultContainer = styled.section`
  margin: 2%;
  margin-top:0;
  font-size: 0.8em;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Results = () => {
  const state = useLocation();
  console.log(state);
  const { perPack, perWeek, juice } = state.state || {
    perPack: 15,
    perWeek: 3.5,
    juice: 25,
  };
  return (
    <>
      <OverlaidImage>
        <ImageOverlay>
          <ResultContainer>
            <h2>
              If a pack of cigarettes is ${perPack} and you smoke {perWeek}{" "}
              packs per week, and 30ml of vape liquid at ${juice}
              .
            </h2>
          </ResultContainer>
          <ResultContainer>
            <h2>
              You could save $
              {perPack * perWeek * 4 - (perWeek / 7 - juice) * 4} this month.
            </h2>
            <h3>Improved cashflow AND bloodflow?</h3>
          </ResultContainer>
          <ResultContainer>
            <h2>
              In three months, that's $
              {perPack * perWeek * 12 - (perWeek / 7 - juice) * 12}.
            </h2>
            <h3>
              A breath of fresh air, and the lung capacity to appreciate it (with
              or without fruit flavor).
            </h3>
          </ResultContainer>
          <ResultContainer>
            <h2>
              This time next year, that's $
              {perPack * perWeek * 52 - (perWeek / 7 - juice) * 52}.
            </h2>
            <h4>
              Whether you've continued vaping, are tapering off the nicotine or quit entirely, your chance of heart disease has likely
              been cut in half. Start planning the celebration and click below
              for more info. No sales pitch. Just hoping to
              help you save dollars and hours.&#x1F49C;{" "}
            </h4>
          </ResultContainer>
        </ImageOverlay>
      </OverlaidImage>
    </>
  );
};
