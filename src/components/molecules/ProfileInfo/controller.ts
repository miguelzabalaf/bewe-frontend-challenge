import { useLocation } from 'wouter';
import { ProfileInfoControllerOutputProps, ProfileInfoProps } from './types';

function useController(props: ProfileInfoProps): ProfileInfoControllerOutputProps {
    const [, setLocation] = useLocation();

    function handleEdit() {
        setLocation('/profile');
    }


    return {
        ...props,
        handleEdit
    };
}

export default useController;