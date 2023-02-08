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
    padding: 10px;
    border: ${props => props.theme.colors.border};
`;

export const LoadMoreBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`;

export const Toggle = styled.button`
    display: inline-block;
    width: 50px;
    height: 30px;
    background: transparrent;
    mix-blend-mode: soft-light;
    border: ${props => props.theme.colors.border};
    border-radius: 50%;
    position: relative;
    &::before{
        content: 'on';
        width: 30px;
        height: 30px;
        background: background: ${props => props.theme.colors.cardBgColor};
        position: absolute;
        top: 50%;
        left: 0;
        right: auto;
        transform: translateY(-50%);
        transition: all 250ms linear;
    }
    &.off::before{
        content: 'off';
        left: auto;
        right: 0;
    }
`;
// background: ${props => props.theme.colors.cardBgColor};