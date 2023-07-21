import AuthHero from "../../../components/molecules/AuthHero";
import SingUpForm from "../../../components/molecules/SingUpForm";
import Screen from "../../../components/organisms/Screen";
import { SingUpControllerOutputProps } from "./types";

function View(props: SingUpControllerOutputProps): JSX.Element {
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
            <AuthHero title={"Sing Up"} />
            <SingUpForm
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
