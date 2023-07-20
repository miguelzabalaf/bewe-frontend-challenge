import useController from "./controller";
import { InputFieldProps } from "./types";
import View from "./view";

function InputField(props: InputFieldProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default InputField;
