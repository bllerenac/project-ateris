/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from '../../ui/Colors'
import {Link} from "react-router-dom";

const StyledDiv = styled.div`
    grid-area: main-view;
    height: 60px;
    z-index: 2;
    min-width: 0;
    pointer-events: none;
`

const StyledHeader = styled.div`
    position: fixed;
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #b3b3b3;
    padding: 16px 32px;
    width: calc(100% - 232px);
    height: 60px;
    background: rgba(12,12,12,1);
    & .link_login{
        pointer-events: auto;
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: 500px;
        font-family: 'Milliard Book';
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
        letter-spacing: 1.76px;
        text-transform: uppercase;
        background-color: ${Colors.white};
        border-radius: 500px;
        color: #181818;
        padding: 8px 34px;
        transition: all 33ms cubic-bezier(.3,0,0,1);
        will-change: transform;
        white-space: nowrap;
        padding: 8px 34px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
`;

const Selectors = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonSelector = styled.button`
    opacity: .6;
    border: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.7);
    color: ${Colors.white};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 16px;
    cursor: pointer;
    & svg{
        opacity: 1;
        height: 22px;
        width: 22px;
        stroke-width: 1pt;
        color: #fff;
    }
`;

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;


function Header({children}){
    return(
        <StyledDiv>
            <StyledHeader>
            <Selectors>
                <ButtonSelector>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="16 4 7 12 16 20" fill="none" stroke="currentcolor"></polyline></svg>
                </ButtonSelector>
                <ButtonSelector>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="8 4 17 12 8 20" fill="none" stroke="currentcolor"></polyline></svg>
                </ButtonSelector>            
            </Selectors>
            <ContentDiv>
                {children}
            </ContentDiv>
            <Link to="/login" className="link_login" css={css`&:hover{transform: scale(1.06);}`}>
                INICIAR SESÍON
            </Link>
        </StyledHeader>
        </StyledDiv>
    );
}
export default Header;