import React from "react";

import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
//<Icon icon="material-symbols:arrow-back-rounded" />
//<Icon icon="material-symbols:arrow-forward-rounded" />
export const Monk = () => {
  const navigate = useNavigate();
  const Back = styled(Icon)`
  font-size:2em;
  margin-left:50%;
  ` 
  return (
    <div styles={{margin: '2%',
      marginTop: '0',
      fontSize: '0.8em',
      display: "flex",
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: 'center'}}>
    <p>
      Developers Note: I gotta put one of them 'PayMePal' links in here, some
      day a rich chain smoking monk is gonna wander in here and I'm going to feel
      like a real dummy.
    </p>
      <Back icon="material-symbols:arrow-back-rounded" onClick={() => navigate(-1)}/>
      
    </div>
  );
};
