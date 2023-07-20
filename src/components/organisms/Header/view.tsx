import { Image } from "../../../assets/images";
import Button from "../../atoms/Button";
import { ButtonSize, ButtonVariant } from "../../atoms/Button/types";
import {
    StyledHeaderActionWrapper,
    StyledHeaderLogoWrapper,
    StyledHeaderWrapper,
} from "./styledComponents";
import { HeaderControllerOutputProps } from "./types";

function View(props: HeaderControllerOutputProps): JSX.Element {
    const { isAuthenticated, handleAction, isLoginPage, ...HeaderProps } =
        props;
    return (
        <StyledHeaderWrapper {...HeaderProps}>
            <StyledHeaderLogoWrapper>
                {isAuthenticated && <Image.LogoHeader />}
            </StyledHeaderLogoWrapper>
            <StyledHeaderActionWrapper>
                <Button
                    onClick={handleAction}
                    size={ButtonSize.SMALL}
                    variant={ButtonVariant.OUTLINE}
                >
                    {isLoginPage ? "Sign Up" : "Login"}
                </Button>
            </StyledHeaderActionWrapper>
        </StyledHeaderWrapper>
    );
}

export default View;
