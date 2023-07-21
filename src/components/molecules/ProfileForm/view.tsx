import { dic } from "../../../common/constants/dictionary";
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
                label={dic.form.nameLabel}
                type={InputFieldTypes.TEXT}
                name={assignInputName("name")}
                errorMessage={getInputErrorMessage("name")}
                hasError={hasInputError("name")}
                placeholder={""}
                register={register}
                disabled
            />
            <WhiteSpace space={30} />
            <InputField
                label={dic.form.email}
                type={InputFieldTypes.EMAIL}
                name={assignInputName("email")}
                errorMessage={getInputErrorMessage("email")}
                hasError={hasInputError("email")}
                placeholder={""}
                register={register}
                disabled
            />
            <WhiteSpace space={30} />
            <InputField
                label={dic.form.locationLabel}
                type={InputFieldTypes.TEXT}
                name={assignInputName("location")}
                errorMessage={getInputErrorMessage("location")}
                hasError={hasInputError("location")}
                placeholder={""}
                register={register}
            />
            <WhiteSpace space={50} />
            <Button type={"submit"} onClick={handleSubmit(onSubmit)}>
                {dic.form.save}
            </Button>
        </StyledLoginFormWrapper>
    );
}

export default View;
