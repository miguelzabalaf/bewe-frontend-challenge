import {
    StyledInputFieldWrapper,
    StyledInputFieldLabel,
    StyledInputFieldComponent,
    StyledInputFieldError,
} from "./styledComponents";
import { InputFieldControllerOutputProps } from "./types";

function View(props: InputFieldControllerOutputProps): JSX.Element {
    const {
        label,
        type,
        placeholder,
        register,
        name,
        hasError,
        errorMessage,
        ...inputProps
    } = props;
    return (
        <StyledInputFieldWrapper>
            {label && (
                <StyledInputFieldLabel htmlFor={`${name}-inputText`}>
                    {label}
                </StyledInputFieldLabel>
            )}
            <StyledInputFieldComponent
                {...register(name)}
                {...inputProps}
                type={type}
                id={`${name}-inputText`}
                placeholder={placeholder}
                autoComplete="off"
            />
            {hasError && (
                <StyledInputFieldError>{errorMessage}</StyledInputFieldError>
            )}
        </StyledInputFieldWrapper>
    );
}

export default View;
