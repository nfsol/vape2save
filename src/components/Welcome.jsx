import React from "react";
import smoking from "../assets/smoking.jpg";
import { Button } from "./Button";
import styled from "styled-components";
const OverlaidImage = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
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
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;

export const Welcome = () => {
  return (
    <>
      <div className="container">
        <OverlaidImage>
          <ImageOverlay>
            Still smoking? Yikes. I know you've heard all the anxiety inducing
            health arguments before, and obviously that hasn't worked. Lets try
            something else. Do you like... saving money?
            <ButtonContainer>
              <Button type="primary" content="Uh...Yes?" />
              <Button
                type="secondary"
                content="No! Possessions are a distraction!"
              />
            </ButtonContainer>
          </ImageOverlay>
        </OverlaidImage>
      </div>
    </>
  );
};
