import useController from "./controller";
import { ProfileFormProps } from "./types";
import View from "./view";

function ProfileForm(props: ProfileFormProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default ProfileForm;
