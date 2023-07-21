import useController from "./controller";
import { WhiteSpaceProps } from "./types";
import View from "./view";

function WhiteSpace(props: WhiteSpaceProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default WhiteSpace;
