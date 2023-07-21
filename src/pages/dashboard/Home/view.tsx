import { StyledContentWithPaddingWrapper } from "../../../components/atoms/ContentWithPadding/styledComponents";
import LinkItem from "../../../components/atoms/LinkItem";
import WhiteSpace from "../../../components/atoms/WhiteSpace";
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
        isValidForm,
        loading,
    } = props;
    return (
        <Screen>
            <StyledContentWithPaddingWrapper>
                <ProfileInfo
                    name={"Miguel Zabala"}
                    email={"zabalafmiguel@hotmail.com"}
                />
                <LinkForm
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
            <WhiteSpace space={35} />
            <LinkItem
                id={1}
                url="www.google.com"
                name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <LinkItem
                id={1}
                url="www.google.com"
                name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <LinkItem
                id={1}
                url="www.google.com"
                name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <LinkItem
                id={1}
                url="www.google.com"
                name="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
        </Screen>
    );
}

export default View;
