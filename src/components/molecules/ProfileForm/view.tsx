import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import { InputFieldTypes } from "../../atoms/InputField/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import { StyledLoginFormWrapper } from "./styledComponents";
import { ProfileFormProps } from "./types";

function View(props: ProfileFormProps): JSX.Element {
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
                label={"Name"}
                type={InputFieldTypes.TEXT}
                name={assignInputName("name")}
                errorMessage={getInputErrorMessage("name")}
                hasError={hasInputError("name")}
                placeholder={""}
                register={register}
            />
            <WhiteSpace space={30} />
            <InputField
                label={"Email"}
                type={InputFieldTypes.EMAIL}
                name={assignInputName("email")}
                errorMessage={getInputErrorMessage("email")}
                hasError={hasInputError("email")}
                placeholder={""}
                register={register}
            />
            <WhiteSpace space={30} />
            <InputField
                label={"Location"}
                type={InputFieldTypes.TEXT}
                name={assignInputName("location")}
                errorMessage={getInputErrorMessage("location")}
                hasError={hasInputError("location")}
                placeholder={""}
                register={register}
            />
            <WhiteSpace space={50} />
            <Button type={"submit"} onClick={handleSubmit(onSubmit)}>
                Save
            </Button>
        </StyledLoginFormWrapper>
    );
}

export default View;
