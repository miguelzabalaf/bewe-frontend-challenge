import useController from "./controller";
import { AuthHeroProps } from "./types";
import View from "./view";

function AuthHero(props: AuthHeroProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default AuthHero;
