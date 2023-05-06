import React, { useState } from "react";
import cloud from "../assets/cloud.jpg";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const OverlaidImage = styled.div`
  width: 100%;
  height: 100vh;
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
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.inputColor || "pink"};
  width: 4.5em;
  height: 4.5em;
  padding: 5%;
  margin: 5%;
  background: #07040a;
  border-radius: 3px;
  border-radius: 50%;
`;
const InputLabel = styled.label`
  font-size: 1em;
`;
const SubmitButton = styled.button`
appearance: none;
background-color: ${(props) =>
  props.type === "primary" ? "white" : "#1a1a1a"};
border: 2px solid
  ${(props) => (props.bordercolor ? props.bordercolor : "#1a1a1a")};
border-radius: 15px;
box-sizing: border-box;
color: ${(props) => (props.type === "primary" ? "#1a1a1a" : "white")};
cursor: pointer;
display: inline-block;
font-size: 16px;
font-weight: 500;
text-decoration:none;
text-align:center;
min-height: 60px;
max-height: 180px;
max-width: 300px;
padding: 16px 0px;
margin: 1%;
transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
width: 100%;
will-change: transform;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
,
&:active {
  box-shadow: none;
  transform: translateY(0);
}`;

export const Calculator = () => {
  const [perPack, setPerPack] = useState(15);
  const [perWeek, setPerWeek] = useState(3.5);
  const [juice, setJuice] = useState(25);

  const { showResults, setShowResults } = useState(false);
  return (
    <>
      <OverlaidImage>
        <ImageOverlay>
          <InputContainer>
            <InputLabel htmlFor="PricePerPack">
              How much do you pay per pack?
            </InputLabel>
            <InputBox
              id="PricePerPack"
              defaultValue="15"
              type="number"
              onChange={(e) => {
                setPerPack(e.target.value);
              }}
            />
            <InputLabel htmlFor="PacksPerWeek">
              How many packs do you smoke in a week?
            </InputLabel>
            <InputBox
              id="PacksPerWeek"
              defaultValue="3.5"
              type="number"
              onChange={(e) => {
                setPerWeek(e.target.value);
              }}
            />
            <InputLabel htmlFor="PricePerJar">
              Happen to know what a 30ml bottle of vape juice costs, locally?
            </InputLabel>
            <InputBox
              id="PricePerJar"
              defaultValue="25"
              type="number"
              onChange={(e) => {
                setJuice(e.target.value);
              }}
            />
            <SubmitButton
              as={Link}
              to={`/results/${perPack}/${perWeek}/${juice}`}
              bordercolor="#0c1e1b"
              type="Primary"
              content="Let's save some cash"
            > Let's Save Some Cash!</SubmitButton>
          </InputContainer>
        </ImageOverlay>
      </OverlaidImage>
    </>
  );
};
