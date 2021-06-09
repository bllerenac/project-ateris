import ButtonNav from "../ui/ButtonNav"
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 232px;
  background: #040404;
  color: #fff;
  & .navbar__logo{
    margin-right: auto;
    object-fit: contain;
    height: 85px;
    padding: 10px;
  }
`;
const List = styled.p`
  margin-top: 50px;
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

function NavBar(){
  return(
    <StyledDiv>
      <img className="navbar__logo" alt="SpotifyLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
      <ButtonNav label="Inicio" icon="home" link_to="/"/>
      <ButtonNav label="Buscar" icon="search_small" link_to="/search"/>
      <ButtonNav label="Tu biblioteca" icon="credit" link_to="/artist"/>
      <List>Listas de Reproduccion</List>
    </StyledDiv>
  );
}

export default NavBar;

