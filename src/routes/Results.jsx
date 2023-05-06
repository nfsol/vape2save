import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import cloud from "../assets/cloud.jpg";
const OverlaidImage = styled.div`
  width: 100%;
  height: 100vh;
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
font-size: 0.8em;
  align-self: center;
  display: flex;
`;

export const Results = (props) => {
  const { perPack, perWeek, juice } = useParams();
  return (
    <>
      <OverlaidImage>
        <ImageOverlay>
          <ResultContainer>
            <h2>
              If a pack of cigarettes is ${perPack} and you smoke {perWeek} packs
              per week...
            </h2>
          </ResultContainer>
          <ResultContainer>
            <h2>
              You'd save ${perPack * perWeek * 4 - (perWeek / 7 - juice) * 4}{" "}
              this month.
            </h2>
          </ResultContainer>
          <ResultContainer>
            <h2>
              You'd save ${perPack * perWeek * 12 - (perWeek / 7 - juice) * 12}{" "}
              in three months.
            </h2>
          </ResultContainer><ResultContainer>
            <h2>
              You'd save ${perPack * perWeek * 52 - (perWeek / 7 - juice) * 52}{" "}
              in a year.
            </h2>
          </ResultContainer>
        </ImageOverlay>
      </OverlaidImage>
    </>
  );
};
