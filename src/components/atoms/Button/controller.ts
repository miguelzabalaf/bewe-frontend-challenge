import { ButtonControllerOutputProps, ButtonProps } from './types';

function useController(props: ButtonProps): ButtonControllerOutputProps {
    return {
        ...props
    };
}

export default useController;