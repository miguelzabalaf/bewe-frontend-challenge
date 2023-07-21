import useController from "./controller";
import { ContentWithPaddingProps } from "./types";
import View from "./view";

function ContentWithPadding(props: ContentWithPaddingProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default ContentWithPadding;
