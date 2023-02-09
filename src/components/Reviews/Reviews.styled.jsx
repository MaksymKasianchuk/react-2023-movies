import styled from '@emotion/styled';

export const ReviewsSection = styled.section`
    padding: 20px;
    border: 2px solid ${props => props.theme.colors.whiteText};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
`;

export const ReviewsList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    &>li{
        background: ${props => props.theme.colors.cardBg};
        padding: 20px;
        box-shadow: ${props => props.theme.colors.boxShadow};
        border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        &:not(:last-child){
            margin: 0 0 30px 0;
        }
        &>p{
            margin: 0;
        }
        & .author{
            font-size: 18px;
            margin-bottom: 20px;
            &>span{
                font-weight: 700;
            }
        }
        & .date{
            margin-bottom: 10px;
            font-size: 18px;
        }
    }
`;