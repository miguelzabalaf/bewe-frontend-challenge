import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import { InputFieldTypes } from "../../atoms/InputField/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import { StyledLoginFormWrapper } from "./styledComponents";
import { LoginFormProps } from "./types";

function View(props: LoginFormProps): JSX.Element {
    const {
        register,
        assignInputName,
        getInputErrorMessage,
        hasInputError,
        onSubmit,
        handleSubmit,
    } = props;
    return (
        <StyledLoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <WhiteSpace space={40} />
            <InputField
                label={"Your Email"}
                type={InputFieldTypes.EMAIL}
                name={assignInputName("email")}
                errorMessage={getInputErrorMessage("email")}
                hasError={hasInputError("email")}
                placeholder={"jeff.brown@example.com"}
                register={register}
            />
            <WhiteSpace space={30} />
            <InputField
                label={"Password"}
                type={InputFieldTypes.PASSWORD}
                name={assignInputName("password")}
                errorMessage={getInputErrorMessage("password")}
                hasError={hasInputError("password")}
                placeholder={"******"}
                register={register}
            />
            <WhiteSpace space={50} />
            <Button type={"submit"} onClick={handleSubmit(onSubmit)}>
                Login
            </Button>
        </StyledLoginFormWrapper>
    );
}

export default View;
