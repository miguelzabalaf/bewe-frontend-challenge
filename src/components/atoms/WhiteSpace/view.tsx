import { StyledWhiteSpace } from "./styledComponents";
import { WhiteSpaceControllerOutputProps } from "./types";

function View(props: WhiteSpaceControllerOutputProps): JSX.Element {
    return <StyledWhiteSpace {...props} />;
}

export default View;
