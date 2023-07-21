import { StyledAvatarWrapper } from "./styledComponents";
import { AvatarControllerOutputProps } from "./types";

function View(props: AvatarControllerOutputProps): JSX.Element {
    return <StyledAvatarWrapper {...props}></StyledAvatarWrapper>;
}

export default View;
