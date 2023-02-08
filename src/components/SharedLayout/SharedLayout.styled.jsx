import styled from '@emotion/styled';
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        // border-bottom: 1px solid black;
        border: ${props => props.theme.colors.border};
        border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        mix-blend-mode: soft-light;
        box-shadow: ${props => props.theme.colors.boxShadow};
    }
    &> nav {
        display: flex;
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
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin-left: 10px;
    transition: ${props => props.theme.transitions.trAllDefLin}; 
    &.active {
        color: white;
        background: ${props => props.theme.colors.btnGrad};
    }
    &:hover{
        opacity: 0.8;
        background-color: #f3f3f3;
    }
`;
export const FallbackMsg = styled.p`
    color: ${props => props.theme.colors.dangerColor}; 
    text-align: center;
`