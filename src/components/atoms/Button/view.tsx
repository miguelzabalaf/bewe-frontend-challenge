import { StyledButtonWrapper } from "./styledComponents";
import { ButtonControllerOutputProps } from "./types";

function View(props: ButtonControllerOutputProps): JSX.Element {
    const { children, loading, ...buttonProps } = props;
    return (
        <StyledButtonWrapper {...buttonProps}>{children}</StyledButtonWrapper>
    );
}

export default View;
