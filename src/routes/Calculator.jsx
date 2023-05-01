import React from "react";
import cloud from "../assets/cloud.jpg";
import styled from "styled-components";
import { Button } from "../components/Button";
const OverlaidImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 75%%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: url(${cloud});
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
const InputContainer = styled.div`
  align-self: center;
  display:flex;
  flex-direction: column;
`;
const TextContainer = styled.div`
  align-self: left;
  max-width: 40%;
  margin-left: 5%;
`;

const InputBox = styled.input`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.inputColor || "pink"};
  width:5em;
  height:5em;
  padding: 5%;
  margin: 5%;
  background: #07040a;
  border: solid;
  border-radius: 3px;
  border-radius: 50%;
  
`;
const InputLabel = styled.label`
font-size: 1em;
`;
const SubmitButton = styled(Button)`

`;

export const Calculator = () => {
  return (
    <div>
      <div className="container">
        <OverlaidImage>
          <ImageOverlay>
            <TextContainer>
              We'll do the math, you just give us some rough estimates here:
            </TextContainer>

            <InputContainer>
              <InputLabel for="PricePerPack">What do you pay per pack?</InputLabel>
              <InputBox id="PricePerPack" defaultValue="15" type="number" />
              <InputLabel for="PacksPerWeek">How many packs do you average in a week?</InputLabel>
              <InputBox id="PacksPerWeek" defaultValue="3.5" type="number" />
              <InputLabel for="PricePerJar">Happen to know what a bottle of vape juice costs, locally?</InputLabel>
              <InputBox id="PricePerJar" defaultValue="25" type="number" />
              <SubmitButton type="Primary" content="Now, lets see"/>
            </InputContainer>
          </ImageOverlay>
        </OverlaidImage>
      </div>
    </div>
  );
};
