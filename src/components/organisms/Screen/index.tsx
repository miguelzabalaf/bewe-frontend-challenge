import useController from "./controller";
import { ScreenProps } from "./types";
import View from "./view";

function Screen(props: ScreenProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Screen;
