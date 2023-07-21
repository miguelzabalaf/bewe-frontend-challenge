import { useForm } from 'react-hook-form';
import { HomeControllerOutputProps, HomeFormKeys, HomeFormProps, HomeProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { linkSchema } from './schemas';


function useController(props: HomeProps): HomeControllerOutputProps {

    const { register, handleSubmit, formState: { errors } } = useForm<HomeFormProps>({
        defaultValues: {
            url: '',
            name: ''
        },
        resolver: yupResolver(linkSchema) as any,
        mode: 'all'
    });

    function hasInputError(inputName: HomeFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: HomeFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: HomeFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onSubmit(data: HomeFormProps) {
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