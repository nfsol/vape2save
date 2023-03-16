import React from "react";
import smoking from '../assets/smoking.jpg'
import { Button } from "./Button";
export const Welcome = () => {
  return (
    <>
    <div className="container">
      <img
      className="pic"
      src={smoking}
      alt="One standing lit cigarette among others snuffed out"
      />
      <div className="welcomeText">
        Still smoking? Yikes. I know you've heard all the anxiety inducing
        health arguments before, and obviously that hasn't worked so lets try
        something else. Do you like... money?
      </div>
    </div>
      <div className="container">
      <Button type="primary" content="Uh...Yes?"/>
      <button>No, I seek to rid myself of all worldy possessions.</button>
      </div>
      </>
  );
};


