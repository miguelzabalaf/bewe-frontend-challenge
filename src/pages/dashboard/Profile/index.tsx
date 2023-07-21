import useController from "./controller";
import { ProfileProps } from "./types";
import View from "./view";

function Profile(props: ProfileProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Profile;
