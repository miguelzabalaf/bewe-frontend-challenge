import { TypographyControllerOutputProps, TypographyProps } from './types';

function useController(props: TypographyProps): TypographyControllerOutputProps {
    return {
        ...props
    };
}

export default useController;