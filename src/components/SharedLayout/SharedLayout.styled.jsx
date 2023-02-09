import styled from '@emotion/styled';
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
    box-shadow: ${props => props.theme.colors.boxShadow};
    border: ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.cardBg};
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;
    }
    & nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 500px) {
        & nav {
            flex-direction: column;
        }
    }
`;

export const Logo = styled(Link)`
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    transition: ${props => props.theme.transitions.trAllDefLin}; 
    &>.logo-txt{
        background-image: ${props => props.theme.colors.btnGrad}; 
        background-clip: text;
        text-fill-color: transparent;
    }
    &:hover{
        opacity: 0.8;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    padding: 8px 16px;
    border-radius: ${props => props.theme.radii.button}px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 18px;
    margin-left: 10px;
    transition: ${props => props.theme.transitions.trAllDefLin}; 
    &.active {
        color: white;
        background: ${props => props.theme.colors.btnGrad};
    }
    &:hover{
        opacity: 0.6;
        background-color: ${props => props.theme.colors.whiteText};;
    }
`;