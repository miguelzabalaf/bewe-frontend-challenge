import { StyledTypographyWrapper } from "./styledComponents";
import { TypographyControllerOutputProps } from "./types";

function View(props: TypographyControllerOutputProps): JSX.Element {
    const { children, ...TypographyProps } = props;
    return (
        <StyledTypographyWrapper {...TypographyProps}>
            {children}
        </StyledTypographyWrapper>
    );
}

export default View;
