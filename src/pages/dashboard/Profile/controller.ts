import { useForm } from 'react-hook-form';
import { ProfileControllerOutputProps, ProfileFormKeys, ProfileFormProps, ProfileProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from './schemas';
import { useLocation } from 'wouter';


function useController(props: ProfileProps): ProfileControllerOutputProps {

    const [, setLocation] = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormProps>({
        defaultValues: {
            name: '',
            email: '',
            location: ''
        },
        resolver: yupResolver(profileSchema) as any,
        mode: 'all'
    });

    function hasInputError(inputName: ProfileFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: ProfileFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: ProfileFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onSubmit(data: ProfileFormProps) {
        console.log(data);
    }

    function handleGoHome() {
        setLocation('/');
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        hasInputError,
        assignInputName,
        getInputErrorMessage,
        handleGoHome,
        ...props
    };
}

export default useController;