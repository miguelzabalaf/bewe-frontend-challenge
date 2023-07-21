import useController from "./controller";
import { ProfileInfoProps } from "./types";
import View from "./view";

function ProfileInfo(props: ProfileInfoProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default ProfileInfo;
