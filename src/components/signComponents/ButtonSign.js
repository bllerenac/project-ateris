import styled from "@emotion/styled";

const StyledButtonFill = styled.button`
  border-radius: 500px;
  border: 2px solid ${(props) => (props.color)};
  background-color: ${(props) => (props.color)};
  text-align: center;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 48px;
  width: ${(props) => (props.size)};
  min-width: 160px;
  color: white; 
`; 

const StyledButton = styled.button`
  border-radius: 500px;
  border: 2px solid ${(props) => (props.border)};
  background-color: ${(props) => (props.border)};
  text-align: center;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 450px;
  font-weight: 700;
  min-width: 160px;
  background-color: white;
  &:hover{
    color: #FFFFFF;
    background-color: ${(props) => (props.color)};
  }
`; 

function ButtonSign({color='#616467', border, children}){
  return(
    <StyledButton color={color} border={border}>
      {children}
    </StyledButton>
  )
};
function ButtonSignFill({color='#616467', size="450px", children}){
  return(
    <StyledButtonFill color={color} size={size} >
      {children}
    </StyledButtonFill>
  )
};


export {ButtonSign, ButtonSignFill};