import { StyledContentWithPaddingWrapper } from "./styledComponents";
import { ContentWithPaddingControllerOutputProps } from "./types";

function View(props: ContentWithPaddingControllerOutputProps): JSX.Element {
    const { children } = props;
    return (
        <StyledContentWithPaddingWrapper>
            {children}
        </StyledContentWithPaddingWrapper>
    );
}

export default View;
