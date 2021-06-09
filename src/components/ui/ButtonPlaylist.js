/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Colors from "./Colors";
import { ButtonTitle } from "./Typography";

const StyledContent = styled.button`
  border-radius: 70px;
  background-color: ${Colors.primary};
  border: none;
  width: 153px;
  height: 32px;
  color: #FFFFFF;
`;



function ButtonPlay({onClick}){
  return(
    <StyledContent onClick={onClick} >
      <ButtonTitle> REPRODUCIR</ButtonTitle>
    </StyledContent>
  );
}

export default ButtonPlay;