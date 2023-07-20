import { ScreenControllerOutputProps, ScreenProps } from "./types";

function useController(props: ScreenProps): ScreenControllerOutputProps {

    return {
        ...props,
    };
}

export default useController;