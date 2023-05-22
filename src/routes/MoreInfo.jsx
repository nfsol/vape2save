import React from "react";
import vapeShop from "../assets/vapeShop.jpg";
import styled from "styled-components";
const OverlaidImage = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${vapeShop});
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
const CardContainer = styled.section`
  margin: 2%;
  margin-top: 0;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0b1b18;
  border-radius: 25px;
`;
const CardTitle = styled.h3`
  margin-top: 2%;
  line-height: 1.8;
  border-bottom: 2px solid white;
`;
const CardText = styled.article`
  max-width: 70%;
  text-align: center;
  line-height: 1.15;
  margin-bottom: 10%;
`;
export const MoreInfo = () => {
  return (
    <div>
      <OverlaidImage>
        <ImageOverlay>
          <CardContainer>
            <CardTitle>One entry about quitting</CardTitle>
            <CardText>
              Elit qui irure officia velit cupidatat cupidatat ex aliquip et
              dolore nulla tempor sit occaecat.
            </CardText>
          </CardContainer>
          <CardContainer>
            <CardTitle>One about locating vape stores</CardTitle>
            <CardText>
              Anim irure pariatur reprehenderit eu duis occaecat.
            </CardText>
          </CardContainer>
        </ImageOverlay>
      </OverlaidImage>
    </div>
  );
};
