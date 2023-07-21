import { StyledTouchableIconWrapper } from "./styledComponents";
import { TouchableIconControllerOutputProps } from "./types";

function View(props: TouchableIconControllerOutputProps): JSX.Element {
    const { children, ...buttonProps } = props;
    return (
        <StyledTouchableIconWrapper {...buttonProps}>
            {children}
        </StyledTouchableIconWrapper>
    );
}

export default View;
