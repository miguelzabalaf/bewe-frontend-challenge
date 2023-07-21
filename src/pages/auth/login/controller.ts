import { useForm } from 'react-hook-form';
import { LoginControllerOutputProps, LoginFormKeys, LoginFormProps, LoginProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schemas';


function useController(props: LoginProps): LoginControllerOutputProps {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema) as any,
        mode: 'all'
    });

    function hasInputError(inputName: LoginFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: LoginFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: LoginFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onSubmit(data: LoginFormProps) {
        console.log(data);
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        hasInputError,
        assignInputName,
        getInputErrorMessage,
        ...props
    };
}

export default useController;