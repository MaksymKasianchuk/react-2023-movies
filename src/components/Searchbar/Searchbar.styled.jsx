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
    margin-top: 5px;
    &>div{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
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
`;

export const FormButton = styled.button`
    padding: 8px 16px;
    border-radius: ${props => props.theme.radii.button}px;
    outline: none;
    border: 1px solid #eeeeee;
    color: black;
    font-weight: 500;
    margin-left: 10px;
    min-width: 100px;
    transition: ${props => props.theme.transitions.trAllDefLin}; 
    background-color: #f3f3f3;
    cursor: pointer;
    margin: 0;
    &:hover{
        opacity: 0.8;
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