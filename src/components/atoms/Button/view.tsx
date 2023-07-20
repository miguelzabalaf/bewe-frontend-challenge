import { ButtonWrapper } from "./styledComponents";
import { ButtonControllerOutputProps } from "./types";

function View(props: ButtonControllerOutputProps): JSX.Element {
    const { children, loading, ...buttonProps } = props;
    return <ButtonWrapper {...buttonProps}>{children}</ButtonWrapper>;
}

export default View;
