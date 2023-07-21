import ContentWithPadding from "../../../components/atoms/ContentWithPadding";
import AuthHero from "../../../components/molecules/AuthHero";
import LoginForm from "../../../components/molecules/LoginForm";
import Screen from "../../../components/organisms/Screen";
import { LoginControllerOutputProps } from "./types";

function View(props: LoginControllerOutputProps): JSX.Element {
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
            <ContentWithPadding>
                <AuthHero title={"Login"} />
                <LoginForm
                    loading={loading}
                    isValidForm={isValidForm}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    register={register}
                    assignInputName={assignInputName}
                    hasInputError={hasInputError}
                    getInputErrorMessage={getInputErrorMessage}
                />
            </ContentWithPadding>
        </Screen>
    );
}

export default View;
