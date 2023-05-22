import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import cloud from "../assets/cloud.jpg";

import { Icon } from "@iconify/react";
import { Flipcard } from "../components/Flipcard";
//<Icon icon="material-symbols:arrow-back-rounded" />
//<Icon icon="material-symbols:arrow-forward-rounded" />

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

export const Results = () => {
  const state = useLocation();
  const { perPack, perWeek, juice } = state.state || {
    perPack: 15,
    perWeek: 3.5,
    juice: 25,
  };
  const savingsPerMonth = perPack * (perWeek * 4) - (perWeek / 7) * juice * 4;
  const cardContents = [
    {
      title: "Here we go:",
      content: `If you smoke ${perWeek} packs per week at ${perPack} per pack, and 30ml of vape liquid costs ${juice}...`,
    },
    {
      title: `You could save $${savingsPerMonth} this month.`,
      content: "Now we're talking. Your cashflow AND bloodflow are looking a little better.",
    },
    {
      title: `In three months, that's $${savingsPerMonth * 3}.`,
      content:
        "A breath of fresh air, and an improved lung capacity to appreciate it(with or without fruit flavor).",
    },
    {
      title: `This time next year, that's $${savingsPerMonth * 12}!`,
      content: `Whether you've continued vaping, are tapering off the nicotine or quit entirely, your chance of heart disease has likely been cut in half. Start planning the celebration and click below for more info. No sales pitch. Just hoping to help you save dollars and hours. ${"\uD83D\uDC93"}`,
    },
  ];
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ duration: 0.2 }}
    >
      <OverlaidImage>
        <ImageOverlay>
          <Flipcard cardContents={cardContents} />
        </ImageOverlay>
      </OverlaidImage>
    </motion.div>
  );
};
