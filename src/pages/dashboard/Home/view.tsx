import LinkForm from "../../../components/molecules/LinkForm";
import ProfileInfo from "../../../components/molecules/ProfileInfo";
import Screen from "../../../components/organisms/Screen";
import { HomeControllerOutputProps } from "./types";

function View(props: HomeControllerOutputProps): JSX.Element {
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
            <ProfileInfo
                name={"Miguel Zabala"}
                email={"zabalafmiguel@hotmail.com"}
            />
            <LinkForm
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
