import { AvatarControllerOutputProps, AvatarProps } from './types';

function useController(props: AvatarProps): AvatarControllerOutputProps {
    return {
        ...props
    };
}

export default useController;