import styled from "@emotion/styled";

export default function Input({placeholder}) {
  return (
    <StyledDiv>
      <svg height="24" role="img" width="24" viewBox="0 0 512 512" class="_08f8133e4f703ce562826348eb158f87-scss" aria-hidden="true"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="#000000"></path></svg>
      <StyledInput placeholder={placeholder} type="text"/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  width: 364px;
  background-color: white;
  padding: 8px 12px;
  border-radius: 30px;
  color: gray;
  align-items: center;
  & svg {
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-family: 'Milliard Book';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-transform: none;
  pointer-events: auto;
  &:focus {
    outline: none;
  }
  &::placeholder{
    font-family: 'Milliard Book';
    font-size: 13px;
  }
`;