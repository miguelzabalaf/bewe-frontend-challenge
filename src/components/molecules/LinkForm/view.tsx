import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import { InputFieldTypes } from "../../atoms/InputField/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import { StyledLinkFormWrapper } from "./styledComponents";
import { LinkFormProps } from "./types";

function View(props: LinkFormProps): JSX.Element {
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
        <StyledLinkFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <WhiteSpace space={40} />
            <InputField
                label={"Url to save"}
                type={InputFieldTypes.TEXT}
                name={assignInputName("url")}
                errorMessage={getInputErrorMessage("url")}
                hasError={hasInputError("url")}
                placeholder={"www.example.com"}
                register={register}
                disabled={loading}
            />
            <WhiteSpace space={30} />
            <InputField
                label={"Name of url"}
                type={InputFieldTypes.TEXT}
                name={assignInputName("name")}
                errorMessage={getInputErrorMessage("name")}
                hasError={hasInputError("name")}
                placeholder={"example"}
                register={register}
                disabled={loading}
            />
            <WhiteSpace space={50} />
            <Button
                type={"submit"}
                onClick={handleSubmit(onSubmit)}
                disabled={loading || !isValidForm}
            >
                Add
            </Button>
        </StyledLinkFormWrapper>
    );
}

export default View;
