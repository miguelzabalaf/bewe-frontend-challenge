import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import { InputFieldTypes } from "../../atoms/InputField/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import { StyledLoginFormWrapper } from "./styledComponents";
import { SingUpFormProps } from "./types";

function View(props: SingUpFormProps): JSX.Element {
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
                label={"Full name"}
                type={InputFieldTypes.TEXT}
                name={assignInputName("name")}
                errorMessage={getInputErrorMessage("name")}
                hasError={hasInputError("name")}
                placeholder={"Jeff Brown Example"}
                register={register}
            />
            <WhiteSpace space={30} />
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
                Sing Up
            </Button>
        </StyledLoginFormWrapper>
    );
}

export default View;
