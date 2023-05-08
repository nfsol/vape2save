import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Bar = styled.div`
height 45px;
width:100%;
text-align:center;
`
const Logo = styled(Link)`
font-size:1.2em;
background-color: #f3ec78;
background-image: linear-gradient(45deg, #f3ec78, #af4261);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
user-select: none;
text-decoration:none;

`

export const Header = () => {
  return (
    <>
      <Bar>
        <Logo to="/" >
        vape2save
        </Logo>
      </Bar>
    </>
  )
}
