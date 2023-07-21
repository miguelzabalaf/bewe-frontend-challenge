import { LinkItemControllerOutputProps, LinkItemProps } from './types';

function useController(props: LinkItemProps): LinkItemControllerOutputProps {
    return {
        ...props
    };
}

export default useController;