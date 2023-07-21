import { colors } from './../../../common/colors/index';
import styled from "styled-components";

export const StyledInputFieldWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledInputFieldLabel = styled.label`
    font-size: 15px;
    color: ${ colors.text };
    font-weight: 500;
    opacity: 0.6;
    margin-bottom: 15px;
`;

export const StyledInputFieldComponent = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    color: ${ colors.text };
    border: 1px solid ${ colors.border };
    border-radius: 7px;
    padding: 16px;
    color: ${ colors.title };
    font-weight: 600;
`;

export const StyledInputFieldError = styled.span`
    color: ${ colors.error };
    font-size: 14px;
    margin-top: 5px;
`;