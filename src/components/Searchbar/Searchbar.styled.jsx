import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchbarStyled = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    mix-blend-mode: soft-light;
    box-shadow: ${props => props.theme.colors.boxShadow};
    margin-top: 15px;
    background: ${props => props.theme.colors.cardBg};
    &>div{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        &>div{
            flex-direction: column;
        }
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    &>label{
        font-size: 15px;
        margin-bottom: 5px;
    }
    margin-right: 20px;
    @media screen and (max-width: 768px) {
        margin: 0 0 15px 0;
    }
`;

export const FormButton = styled.button`
    padding: 8px 16px;
    border-radius: ${props => props.theme.radii.button}px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.whiteText}; 
    color: black;
    font-weight: 500;
    margin-left: 10px;
    min-width: 100px;
    transition: ${props => props.theme.transitions.trAllDefLin}; 
    background-color: ${props => props.theme.colors.whiteText}; 
    box-shadow: ${props => props.theme.colors.boxShadow};
    cursor: pointer;
    margin: 0;
    &:hover{
        background-color: ${props => props.theme.colors.cardBg}; 
    }
    @media screen and (max-width: 768px) {
        min-width: 180px;
    }
`;

export const FieldStyled = styled(Field)`
    &[type="text"], &[type="number"]{
        background: #ffffff;
        display: inline-block;
        width: 100%;
        border-radius: ${props => props.theme.radii.input}px;
        border: 1px solid #f3f3f3;
        outline: none;
        padding: 5px 10px;
        font-size: 14px;
    }
    &[type="checkbox"]{
        margin-right: 5px;
    }

`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    color: ${props => props.theme.colors.dangerColor};
    margin-top: 5px;
    padding: 5px 10px;
    display: inline-block;
    width: 100%;
    background:  ${props => props.theme.colors.dangerBg};
    border-radius: ${props => props.theme.radii.input}px;
`; 