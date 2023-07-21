import { LoginFormControllerOutputProps, LoginFormProps } from './types';

function useController(props: LoginFormProps): LoginFormControllerOutputProps {
    return {
        ...props
    };
}

export default useController;