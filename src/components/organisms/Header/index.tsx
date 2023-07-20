import useController from "./controller";
import { HeaderProps } from "./types";
import View from "./view";

function Header(props: HeaderProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Header;
