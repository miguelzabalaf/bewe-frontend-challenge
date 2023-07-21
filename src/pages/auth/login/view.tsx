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
    } = props;
    return (
        <Screen>
            <AuthHero title={"Login"} />
            <LoginForm
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                register={register}
                assignInputName={assignInputName}
                hasInputError={hasInputError}
                getInputErrorMessage={getInputErrorMessage}
            />
        </Screen>
    );
}

export default View;
