import { NavTopControllerOutputProps, NavTopProps } from './types';

function useController(props: NavTopProps): NavTopControllerOutputProps {
    return {
        ...props
    };
}

export default useController;