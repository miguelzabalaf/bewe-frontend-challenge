import { dic } from "../../../common/constants/dictionary";
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
        isValidForm,
        loading,
        user,
    } = props;
    return (
        <Screen>
            <ContentWithPadding>
                <NavTop title={dic.title.profile} handleGoBack={handleGoHome} />
                <WhiteSpace space={40} />
                <ProfileInfo name={user.name} hideEditAction />
                <ProfileForm
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
