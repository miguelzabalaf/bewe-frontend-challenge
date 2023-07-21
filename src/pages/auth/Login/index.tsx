import useController from "./controller";
import { LoginProps } from "./types";
import View from "./view";

function Login(props: LoginProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Login;
