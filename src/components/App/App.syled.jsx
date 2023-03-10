import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
    position: relative;
    z-index: 1;
`;

export const ErrorMessage = styled.p`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    color: ${props => props.theme.colors.dangerColor}; 
    background-color: ${props => props.theme.colors.dangerBg};
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    margin-top: 5px;
    text-align: center;
    padding: 20px;
    margin-top: 40px; 
    border: ${props => props.theme.colors.border};
`;

export const MovieBottom = styled.div`
    margin: 40px 0 0 0;
`;

export const MovieControls = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 15px;
    @media screen and (max-width: 420px) {
        flex-direction: column;
        &>div{
            margin-top: 10px;
        }
    }
    &>div{
        &>a{
            padding: 8px 16px;
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
            &:not(:last-child){
                margin: 0 5px 0 0;
            }
            &:hover, &:focus {
                background: ${props => props.theme.colors.whiteText};
            }
            &.active{
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                height: 40px;
                background: ${props => props.theme.colors.whiteText};
            }
        }
    }
`;

export const MovieDetailsMain = styled.div`
    padding-bottom: 40px;
`;