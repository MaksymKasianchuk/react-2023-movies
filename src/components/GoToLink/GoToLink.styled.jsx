import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const GoToLinkStyled = styled(Link)`
    padding: 8px 16px;
    // margin: 10px 0;
    border-radius: ${props => props.theme.radii.button}px;
    background: ${props => props.theme.colors.cardBg};
    transition: ${props => props.theme.transitions.trAllDefLin};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.lightText};
    border: 0;
    font-size: 18px;
    cursor: pointer;
    min-width: 100px;
    box-shadow:  ${props => props.theme.colors.boxShadow};
    &:hover, &:focus {
        background: ${props => props.theme.colors.whiteText};
    }
`;