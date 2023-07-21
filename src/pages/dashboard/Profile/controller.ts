import { useForm } from 'react-hook-form';
import { ProfileControllerOutputProps, ProfileFormKeys, ProfileFormProps, ProfileProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from './schemas';
import { useLocation } from 'wouter';
import { usePromiseTracker } from 'react-promise-tracker';
import { profileSelectors } from '../../../config/redux/selectors/profile';
import { useSelector } from 'react-redux';
import { dic } from '../../../common/constants/dictionary';


function useController(props: ProfileProps): ProfileControllerOutputProps {

    const [, setLocation] = useLocation();

    const { getUser } = profileSelectors();
    const user = useSelector(getUser());

    const { register, handleSubmit, formState: { errors, isValid: isValidForm } } = useForm<ProfileFormProps>({
        defaultValues: {
            name: user.name,
            email: user.email,
            location: ''
        },
        resolver: yupResolver(profileSchema) as any,
        mode: 'all'
    });

    const { promiseInProgress: loading } = usePromiseTracker();

    function hasInputError(inputName: ProfileFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: ProfileFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: ProfileFormKeys) {
        return errors[inputName]?.message || dic.form.fieldRequired;
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
        isValidForm,
        loading,
        user,
        ...props
    };
}

export default useController;