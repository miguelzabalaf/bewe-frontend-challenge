import { StyledContentWithPaddingWrapper } from "../../../components/atoms/ContentWithPadding/styledComponents";
import AuthHero from "../../../components/molecules/AuthHero";
import SingUpForm from "../../../components/molecules/SingUpForm";
import Screen from "../../../components/organisms/Screen";
import { SignUpControllerOutputProps } from "./types";

function View(props: SignUpControllerOutputProps): JSX.Element {
    const {
        register,
        assignInputName,
        getInputErrorMessage,
        hasInputError,
        onSubmit,
        handleSubmit,
        loading,
        isValidForm,
    } = props;
    return (
        <Screen>
            <StyledContentWithPaddingWrapper>
                <AuthHero title={"Sing Up"} />
                <SingUpForm
                    loading={loading}
                    isValidForm={isValidForm}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    register={register}
                    assignInputName={assignInputName}
                    hasInputError={hasInputError}
                    getInputErrorMessage={getInputErrorMessage}
                />
            </StyledContentWithPaddingWrapper>
        </Screen>
    );
}

export default View;
