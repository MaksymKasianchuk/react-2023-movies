import styled from '@emotion/styled';


export const NotFoundStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    &>h2{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        padding: 50px;
        box-shadow: ${props => props.theme.colors.boxShadow};
        border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        border: ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.cardBg};
        color: ${props => props.theme.colors.dangerColor};
        &>span{
            font-weight: 400;
        }
    }
`;