import useController from "./controller";
import { LinkFormProps } from "./types";
import View from "./view";

function LinkForm(props: LinkFormProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default LinkForm;
