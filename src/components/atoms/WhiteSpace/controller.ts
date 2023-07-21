import { WhiteSpaceControllerOutputProps, WhiteSpaceProps } from './types';

function useController(props: WhiteSpaceProps): WhiteSpaceControllerOutputProps {
    return {
        ...props
    };
}

export default useController;