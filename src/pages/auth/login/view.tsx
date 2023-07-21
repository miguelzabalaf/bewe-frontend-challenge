import { Image } from "../../../assets/images";
import Typography from "../../../components/atoms/Typography";
import {
    TypographySize,
    TypographyWeight,
} from "../../../components/atoms/Typography/types";
import WhiteSpace from "../../../components/atoms/WhiteSpace";
import LoginForm from "../../../components/molecules/LoginForm";
import Screen from "../../../components/organisms/Screen";
import { StyledLoginLogoWrapper } from "./styledComponents";
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
            <WhiteSpace space={50} />
            <StyledLoginLogoWrapper>
                <Image.LogoMain />
            </StyledLoginLogoWrapper>
            <WhiteSpace space={50} />
            <Typography size={TypographySize.H1} weight={TypographyWeight.BOLD}>
                Login
            </Typography>
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
