/** @jsxImportSource @emotion/react */
import Icons from "./Icons"
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

import Colors from "./Colors"

function ButtonNav({label, icon, link_to}){
  return(
    <StyledDiv>
      <NavLink exact to={link_to} activeClassName="selected">
      <img alt={`icon_`+ icon} src={Icons[icon]}/>
        {label}
      </NavLink>
    </StyledDiv>
  );
}

export default ButtonNav;

const StyledDiv = styled.div`
  & a{
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 40px;
    font-family: 'Nunito Sans', sans-serif;
    transition: 200ms color ease-in;
    border: none;
    border-left: 4px solid #030303;;
    background: #030303;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #7d7d7d;
    margin-top: 10px;
    gap: 10px;
    padding: 8px 20px;
    text-decoration: none;
    :hover{
    color:white;
    border-left: 4px solid ${Colors.primary};
    }
  }

  & img{
    width: 20.5px;
    height: 22.8px;
  }
  
  & .selected{
    color:white;
    border-left: 4px solid ${Colors.primary};
  }
`;

