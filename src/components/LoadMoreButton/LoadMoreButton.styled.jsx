import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
    padding: 8px 16px;
    border-radius: ${props => props.theme.radii.button}px;
    background:  ${props => props.theme.colors.btnGrad};
    transition: ${props => props.theme.transitions.trAllDefLin};
    text-align: center;
    display: inline-block;
    color: ${props => props.theme.colors.whiteText};
    border: 0;
    font-size: 18px;
    cursor: pointer;
    min-width: 180px;
    box-shadow:  ${props => props.theme.colors.boxShadow};
    &:hover, &:focus {
      opacity: 0.8;
    }
`;

export const LoadMoreBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 40px 0;
`;