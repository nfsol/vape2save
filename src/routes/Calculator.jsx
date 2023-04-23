import React from 'react'
import cloud from "../assets/cloud.jpg";
import styled from "styled-components";
const OverlaidImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 75%%;
  margin-top:5%;
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
`;
const TextContainer = styled.div`
  align-self: left;
  max-width: 40%;
  margin-left:5%;
`;

const InputBox = styled.input`
font-size: 1em;
padding: 5%;
margin: 5%;
color: ${props => props.inputColor || "pink"};
background: #07040a;
border: solid;
border-radius: 3px;
`;
export const Calculator = () => {
  return (
    <div>
      <div className="container">
        <OverlaidImage>
          <ImageOverlay>
            <TextContainer>
        We'll do the math, you give us some rough numbers here: 
            </TextContainer>

            
            <InputContainer>
            <InputBox id="PricePerPack" defaultValue="15" type="number"/>
            <InputBox id="PacksPerWeek" defaultValue="3.5" type="number"/>
            <InputBox id="PricePerJar" defaultValue="25" type="number"/>
            </InputContainer>
          </ImageOverlay>
        </OverlaidImage>
      </div>
    </div>
  )
}


