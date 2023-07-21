import { useForm } from 'react-hook-form';
import { SingUpControllerOutputProps, SingUpFormKeys, SingUpFormProps, SingUpProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { singUpSchema } from './schemas';


function useController(props: SingUpProps): SingUpControllerOutputProps {

    const { register, handleSubmit, formState: { errors } } = useForm<SingUpFormProps>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        resolver: yupResolver(singUpSchema) as any,
        mode: 'all'
    });

    function hasInputError(inputName: SingUpFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: SingUpFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: SingUpFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onSubmit(data: SingUpFormProps) {
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