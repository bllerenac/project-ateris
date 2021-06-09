import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Headline({ children }) {
  return <StyledHeadline>{children}</StyledHeadline>;
}

function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}

function BodyRoman({ children }) {
  return <StyledBodyRoman>{children}</StyledBodyRoman>;
}

function BodyBlack({ children }) {
  return <StyledBodyBlack>{children}</StyledBodyBlack>;
}

function ButtonTitle({ children }) {
  return <StyledButtonTitle>{children}</StyledButtonTitle>;
}

const baseStyles = css`
  font-style: normal;
  font-family: 'Nunito Sans', sans-serif;
  color: #FFFFFF;
`;

const StyledHeadline = styled.p`
  ${baseStyles}
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
`;

const StyledSubtitle = styled(StyledHeadline)` 
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
`;

const StyledBodyRoman = styled(StyledHeadline)`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

const StyledBodyBlack = styled(StyledHeadline)`
  font-weight: 900; 
  font-size: 14px;
  line-height: 22px;
`;

const StyledButtonTitle = styled(StyledHeadline)`
  
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

export { Headline, Subtitle, BodyRoman, BodyBlack, ButtonTitle };
