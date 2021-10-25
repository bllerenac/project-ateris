import styled from "@emotion/styled";
import Player from "../contents/Player";
import NavBar from "../contents/NavBar";



const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 90px);
`;

const PageDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
`

function Layout ({children}){
  return(
    <StyledDiv>
        <ContentDiv>
          <NavBar/>
          <PageDiv>
            {children}
          </PageDiv>
        </ContentDiv>
        <Player/>
    </StyledDiv>
  )
}

export default Layout

