import React from "react";
import smoking from "../assets/smoking.jpg";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
const OverlaidImage = styled.div`

  width: 100%;
  height: 100%;
  max-height: 75%;
  max-width:1080px;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: url(${smoking});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: space-between;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;
const TextContainer = styled.div`
  align-self: left;
  max-width: 40%;
  margin-left: 5%;
`;
export const Welcome = () => {
  return (
    <>
      <div className="container">
        <OverlaidImage>
          <ImageOverlay>
            <TextContainer>
              Still smoking? Yikes. I know you've heard all the anxiety inducing
              health arguments before, and obviously that hasn't worked. Lets
              try something else. Do you like... saving money?
            </TextContainer>
            <ButtonContainer>
              <Link to={"calc"}>
                <Button type="primary" content="Uh...Yes?" />
              </Link>
              <Link to={"monk"}>
                <Button
                  type="secondary"
                  content="No! Possessions are a distraction!"
                />
              </Link>
            </ButtonContainer>
          </ImageOverlay>
        </OverlaidImage>
      </div>
    </>
  );
};
