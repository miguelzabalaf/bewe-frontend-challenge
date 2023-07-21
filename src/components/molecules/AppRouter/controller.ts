import { AppRouterControllerOutputProps, AppRouterProps } from './types';

function useController(props: AppRouterProps): AppRouterControllerOutputProps {
    return {
        ...props
    };
}

export default useController;