import { SingUpFormControllerOutputProps, SingUpFormProps } from './types';

function useController(props: SingUpFormProps): SingUpFormControllerOutputProps {
    return {
        ...props
    };
}

export default useController;