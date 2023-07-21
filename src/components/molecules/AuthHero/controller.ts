import { AuthHeroControllerOutputProps, AuthHeroProps } from './types';

function useController(props: AuthHeroProps): AuthHeroControllerOutputProps {
    return {
        ...props
    };
}

export default useController;