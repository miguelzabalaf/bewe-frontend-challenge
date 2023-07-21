import useController from "./controller";
import { LinkItemProps } from "./types";
import View from "./view";

function LinkItem(props: LinkItemProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default LinkItem;
