import { TouchableIconControllerOutputProps, TouchableIconProps } from './types';

function useController(props: TouchableIconProps): TouchableIconControllerOutputProps {
    return {
        ...props
    };
}

export default useController;