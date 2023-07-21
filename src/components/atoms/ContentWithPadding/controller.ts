import { ContentWithPaddingControllerOutputProps, ContentWithPaddingProps } from './types';

function useController(props: ContentWithPaddingProps): ContentWithPaddingControllerOutputProps {
    return {
        ...props
    };
}

export default useController;