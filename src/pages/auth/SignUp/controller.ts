import { useForm } from 'react-hook-form';
import { SignUpControllerOutputProps, SignUpFormKeys, SignUpFormProps, SignUpProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './schemas';
import { usePromiseTracker } from 'react-promise-tracker';
import { userUseCases } from '../../../domain/useCases/user';
import { userImplementation } from '../../../domain/implementation/user';
import { useLocation } from 'wouter';
import { authPath } from '../../../domain/constants/endpoints';


function useController(props: SignUpProps): SignUpControllerOutputProps {

    const { signUp } = userUseCases(userImplementation());

    const [, setLocation] = useLocation();

    const { register, handleSubmit, formState: { errors, isValid: isValidForm } } = useForm<SignUpFormProps>({
        defaultValues: {
            name: 'Miguel Zabala',
            email: 'zabalafmiguel@hotmail.com',
            password: '123456'
        },
        resolver: yupResolver(signUpSchema) as any,
        mode: 'all'
    });

    const { promiseInProgress: loading } = usePromiseTracker();

    function hasInputError(inputName: SignUpFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: SignUpFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: SignUpFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onSignUpSuccess() {
        setLocation(`${ authPath }/login`);
    }

    async function onSignUp(data: SignUpFormProps) {
        try {
            await signUp(data);
            onSignUpSuccess();
        } catch (error) {
            console.log(error);
        }

    }

    function onSubmit(data: SignUpFormProps) {
        onSignUp(data);
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        hasInputError,
        assignInputName,
        getInputErrorMessage,
        loading,
        isValidForm,
        ...props
    };
}

export default useController;