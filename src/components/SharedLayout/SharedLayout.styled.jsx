import styled from '@emotion/styled';
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;

    > nav {
        display: flex;
    }
`;

export const Logo = styled(Link)`
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    color: black;
`;

export const NavLinkStyled = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
        color: white;
        background-color: orangered;
    }
`;
export const FallbackMsg = styled.p`
    color: ${props => props.theme.colors.dangerColor}; 
    text-align: center;
`