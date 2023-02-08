import styled from '@emotion/styled';


export const MovieListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 16px;
`;

export const MovieName = styled.p`
    margin: 0;
    padding: 20px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.darkColor};
`;

export const MovieCard = styled.li`
    width: 100%;
    mix-blend-mode: soft-light;
    box-shadow: ${props => props.theme.colors.boxShadow};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    border: ${props => props.theme.colors.border};
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    transition: ${props => props.theme.transitions.trAllDefLin};
    &>a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    & img{
        width: 100%;
        min-width: 198px;
        min-height: 297px;
    }
    &:hover{
        opacity: 0.8;
        // transform: scale(1.02);
    }
`;
