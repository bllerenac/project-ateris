import styled from "@emotion/styled";
import Playlist from "../ui/Playlist";
import Header from "../contents/Headers/Header"
import React from 'react';

export default function Body() {
  
  return (
    <StyledBody>
      <Header/>
      <Playlist />
    </StyledBody>
  )
}

const StyledBody = styled.div`
  width: calc(100vw - 232px);
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  color: #fff;
`;

