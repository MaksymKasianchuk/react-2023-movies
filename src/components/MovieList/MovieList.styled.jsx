import styled from '@emotion/styled';


export const MovieListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 25px;
    margin: 0;
    padding: 20px;
    justify-content: center;
`;

export const MovieName = styled.p`
    margin: 0;
    padding: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.lightText};
`;

export const MovieCard = styled.li`
    width: 100%;
    background: ${props => props.theme.colors.cardBg};
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
        &>div{
            width: 100%;
            position: relative;
        }
    }
    & img{
        width: 100%;
        min-width: 198px;
        min-height: 297px;
        transition: ${props => props.theme.transitions.trAllDefLin};
    }
    &:hover{
        & img{
            opacity: 0.6;
        }
        background: ${props => props.theme.colors.whiteText};
    }
`;

export const Vote = styled.p`
    position: absolute;
    bottom: 10px;
    right: 5px;
    background: ${props => props.theme.colors.btnGrad};
    color: ${props => props.theme.colors.whiteText};
    border-radius: ${props => props.theme.radii.input}px;
    padding: 5px 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1;
    margin: 0;
`;