import { ProfileFormControllerOutputProps, ProfileFormProps } from './types';

function useController(props: ProfileFormProps): ProfileFormControllerOutputProps {
    return {
        ...props
    };
}

export default useController;