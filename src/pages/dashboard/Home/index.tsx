import useController from "./controller";
import { HomeProps } from "./types";
import View from "./view";

function Home(props: HomeProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Home;
