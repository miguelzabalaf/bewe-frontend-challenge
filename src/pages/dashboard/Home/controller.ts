import { useForm } from 'react-hook-form';
import { HomeControllerOutputProps, HomeFormKeys, HomeFormProps, HomeProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { linkSchema } from './schemas';
import { usePromiseTracker } from 'react-promise-tracker';
import { profileSelectors } from '../../../config/redux/selectors/profile';
import { useSelector } from 'react-redux';


function useController(props: HomeProps): HomeControllerOutputProps {

    const { register, handleSubmit, formState: { errors, isValid: isValidForm } } = useForm<HomeFormProps>({
        defaultValues: {
            url: '',
            name: ''
        },
        resolver: yupResolver(linkSchema) as any,
        mode: 'all'
    });

    const { promiseInProgress: loading } = usePromiseTracker();

    const { getUser } = profileSelectors();
    const user = useSelector(getUser());

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
        isValidForm,
        loading,
        user,
        ...props
    };
}

export default useController;