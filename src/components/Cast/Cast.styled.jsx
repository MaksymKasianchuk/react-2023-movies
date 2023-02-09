import styled from '@emotion/styled';


export const CastSection = styled.section`
    padding: 20px;
    border: 2px solid ${props => props.theme.colors.whiteText};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
`;

export const CastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    gap: 15px;
    margin: 0;
    padding: 0;
    &>li{
        width: 100%;
        background: ${props => props.theme.colors.cardBg};
        box-shadow: ${props => props.theme.colors.boxShadow};
        border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        border: ${props => props.theme.colors.border};
        overflow: hidden;
        cursor: pointer;
        text-align: center;
        transition: ${props => props.theme.transitions.trAllDefLin};
        & img{
            width: 100%;
            min-width: 198px;
            min-height: 297px;
        }
        & .actor-name{
            font-size: 18px;
            padding: 0 15px;
        }
        & .actor-character{
            padding: 0 15px;
        }
    }
`;
