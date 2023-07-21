import useController from "./controller";
import { LoginFormProps } from "./types";
import View from "./view";

function LoginForm(props: LoginFormProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default LoginForm;
