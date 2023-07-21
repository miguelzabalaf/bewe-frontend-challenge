import { LinkFormControllerOutputProps, LinkFormProps } from './types';

function useController(props: LinkFormProps): LinkFormControllerOutputProps {
    return {
        ...props
    };
}

export default useController;