import useController from "./controller";
import { SignUpProps } from "./types";
import View from "./view";

function SignUp(props: SignUpProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default SignUp;
