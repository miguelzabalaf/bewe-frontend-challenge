import { dic } from "../../../common/constants/dictionary";
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
        isValidForm,
        loading,
    } = props;
    return (
        <StyledLoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <WhiteSpace space={40} />
            <InputField
                label={dic.form.fullNameLabel}
                type={InputFieldTypes.TEXT}
                name={assignInputName("name")}
                errorMessage={getInputErrorMessage("name")}
                hasError={hasInputError("name")}
                placeholder={""}
                register={register}
                disabled={loading}
            />
            <WhiteSpace space={30} />
            <InputField
                label={dic.form.emailLabel}
                type={InputFieldTypes.EMAIL}
                name={assignInputName("email")}
                errorMessage={getInputErrorMessage("email")}
                hasError={hasInputError("email")}
                placeholder={""}
                register={register}
                disabled={loading}
            />
            <WhiteSpace space={30} />
            <InputField
                label={dic.form.passwordLabel}
                type={InputFieldTypes.PASSWORD}
                name={assignInputName("password")}
                errorMessage={getInputErrorMessage("password")}
                hasError={hasInputError("password")}
                placeholder={""}
                register={register}
                disabled={loading}
            />
            <WhiteSpace space={50} />
            <Button
                type={"submit"}
                onClick={handleSubmit(onSubmit)}
                disabled={loading || !isValidForm}
            >
                {dic.form.signUp}
            </Button>
        </StyledLoginFormWrapper>
    );
}

export default View;
