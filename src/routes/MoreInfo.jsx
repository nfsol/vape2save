import React from "react";
import vapeShop from "../assets/vapeShop.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-bottom: 2%;
`;
const CardText = styled.article`
  font-size: 0.75em;
  line-height: 1.2;
  max-width: 70%;
  text-align: center;
  margin-bottom: 2%;
`;

const StopSmokingLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  border-bottom: 2px solid orange;
  margin-bottom: 10%;
`;

export const MoreInfo = () => {
  return (
    <div>
      <OverlaidImage>
        <ImageOverlay>
          <CardContainer>
            <CardTitle>Contact a Local Vape Shop</CardTitle>
            <CardText>
              While vaping products are sold in many forms and places... When in
              doubt your best bet is to call, email or stop by your local vape
              shop. Get advice, recommendations and some hard numbers on all the
              cash you're gonna save. Feeling shy? No problem! Your favorite
              search engine will lead you to many online offerings as well!
            </CardText>
          </CardContainer>
          <CardContainer>
            <CardTitle>Maybe it's Time to Quit.</CardTitle>
            <CardText>
              Perhaps seeing the cost of cigarettes was enough
              to urge you to quit entirely, or maybe you'd just like some more
              information. Maybe you're really into smoking cessation
              media, we aren't judging. What ever your reason: You should know that the Government of Canada has a great
              collection of resources that we've accidently left a link to
              below.
            </CardText>
            <StopSmokingLink
              to={
                "https://www.canada.ca/en/health-canada/campaigns/quit-smoking.html"
              }
            >
              Oops.
            </StopSmokingLink>
          </CardContainer>
        </ImageOverlay>
      </OverlaidImage>
    </div>
  );
};
