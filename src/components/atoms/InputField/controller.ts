import { InputFieldControllerOutputProps, InputFieldProps } from './types';

function useController(props: InputFieldProps): InputFieldControllerOutputProps {
    return {
        ...props
    };
}

export default useController;