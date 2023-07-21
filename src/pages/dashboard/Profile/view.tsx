import ContentWithPadding from "../../../components/atoms/ContentWithPadding";
import WhiteSpace from "../../../components/atoms/WhiteSpace";
import NavTop from "../../../components/molecules/NavTop";
import ProfileForm from "../../../components/molecules/ProfileForm";
import ProfileInfo from "../../../components/molecules/ProfileInfo";
import Screen from "../../../components/organisms/Screen";
import { ProfileControllerOutputProps } from "./types";

function View(props: ProfileControllerOutputProps): JSX.Element {
    const {
        register,
        assignInputName,
        getInputErrorMessage,
        hasInputError,
        onSubmit,
        handleSubmit,
        handleGoHome,
    } = props;
    return (
        <Screen>
            <ContentWithPadding>
                <NavTop title={"Profile"} handleGoBack={handleGoHome} />
                <WhiteSpace space={40} />
                <ProfileInfo name={"Miguel Zabala"} hideEditAction />
                <ProfileForm
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
