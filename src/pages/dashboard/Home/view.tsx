import _ from "lodash";
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
        user,
        linksPath,
        onDeleteLink,
    } = props;
    return (
        <Screen>
            <StyledContentWithPaddingWrapper>
                <ProfileInfo
                    name={user.name}
                    email={user.email}
                    image={user.image}
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
            {_.map(linksPath, (linkPath) => (
                <LinkItem
                    onDelete={() => onDeleteLink({ id: linkPath.id })}
                    key={linkPath.id}
                    id={linkPath.id}
                    url={linkPath.url}
                    name={linkPath.name}
                />
            ))}
        </Screen>
    );
}

export default View;
