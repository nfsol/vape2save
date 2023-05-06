import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const BaseButton = styled(motion.button)`
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
  }
`;

export const Button = (props) => {
  return <BaseButton type="button">{props.content}</BaseButton>;
};
