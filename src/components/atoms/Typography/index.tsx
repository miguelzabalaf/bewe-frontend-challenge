import useController from "./controller";
import { TypographyProps } from "./types";
import View from "./view";

function Typography(props: TypographyProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Typography;
