import styled from "@emotion/styled";
import Input from "../form/Input";

export default function SearchBar() {
  return (
    <StyledHeader>
      <div className="header__left">
        <Input />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-left: 15px;
`;