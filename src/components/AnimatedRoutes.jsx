import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MoreInfo } from "../routes/MoreInfo";
import { Calculator } from "../routes/Calculator";
import { Results } from "../routes/Results";
import { Welcome } from "../routes/Welcome";
import { Monk } from "../routes/Monk";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Welcome />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/results" element={<Results />} />
        <Route path="/monk" element={<Monk />} />
        <Route path="/info" element={<MoreInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
