import Header from "../Header";
import {
    StyledScreenContentWrapper,
    StyledScreenWrapper,
} from "./styledComponents";
import { ScreenControllerOutputProps } from "./types";

function View(props: ScreenControllerOutputProps): JSX.Element {
    const { children } = props;
    return (
        <StyledScreenWrapper>
            <Header />
            <StyledScreenContentWrapper>{children}</StyledScreenContentWrapper>
        </StyledScreenWrapper>
    );
}

export default View;
