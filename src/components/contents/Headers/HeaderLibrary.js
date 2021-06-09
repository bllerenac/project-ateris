/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "./Header"
import {NavLink} from "react-router-dom";

const StyledOptions = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 8px;
    & li{
        height: 41px;
        pointer-events: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    & a{
        display: flex;
        align-items: center;
        height: 100%;
        border-radius: 4px;
        text-align: center;
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-family: "CircularStd-Black", sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: normal;
        padding: 8px 16px;
    }
    & .selected_option{
        background-color: rgb(51, 51, 51);
    }
`

function HeaderLibrary(){
    return(
        <Header>
            <StyledOptions>
                <li><NavLink to={`/collection/playlist`} activeClassName="selected_option">Playlists</NavLink></li>
                <li><NavLink to={`/collection/podcasts`} activeClassName="selected_option">Podcasts</NavLink></li>
                <li><NavLink to={`/collection/artists`} activeClassName="selected_option">Artistas</NavLink></li>
                <li><NavLink to={`/collection/albums`} activeClassName="selected_option">Álbumes</NavLink></li>
            </StyledOptions>
        </Header>
    )
}

export default HeaderLibrary;