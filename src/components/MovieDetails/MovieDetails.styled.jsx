import styled from '@emotion/styled';


export const MovieDetailsWrap = styled.div`
    box-shadow: ${props => props.theme.colors.boxShadow};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    border: ${props => props.theme.colors.border};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background: rgb(255 255 255 / 75%);
`;

export const Poster = styled.div`
    margin-right: 40px;
    padding: 20px 0 20px 20px;
    &>div{
        position: relative;
        margin-bottom: 20px;
        &>img{
            width: 300px;
            border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        }
        &>div{
            position: absolute;
            top: 10px;
            right: 10px;
            background: ${props => props.theme.colors.btnGrad};
            color: ${props => props.theme.colors.whiteText};
            border-radius: ${props => props.theme.radii.input}px;
            padding: 5px 10px;
            font-weight: 700;
            line-height: 1;
        }
    }
`;

export const MovieTitle = styled.h2`
    margin: 0 0 15px 0;
`;

export const InfoBlock = styled.div`
    padding: 20px 20px 20px 0;
`;

export const ShortInfo = styled.p`
    margin: 15px 0 0 0;
    font-weight: 400;
    &>span{
        font-weight: 700;
    }
`;

export const InfoBlockItem = styled.div`
    margin: 0 0 20px 0;
    &>p{
        margin: 0;
        font-size: 18px;
    }
    &>ul{
        margin: 10px 0 0 0;
        padding: 0;
        list-style: none;
        &>li{
            display: inline-block;
            padding: 5px 10px;
            margin: 0 10px 5px 0;
            border-radius: ${props => props.theme.radii.input}px;
            background-color: #f3f3f3;
            border: 1px solid #eeeeee;
        }
    }
`;

export const OverviewBlock = styled.div`
    &>.overview-title{
        margin: 0;
        font-size: 18px;
    }
    &>.overview-txt{
        margin: 15px 0 0 0;
        font-size: 16px;
    }
`;
