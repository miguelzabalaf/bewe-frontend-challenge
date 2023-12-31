import { useForm } from 'react-hook-form';
import { SignUpControllerOutputProps, SignUpFormKeys, SignUpFormProps, SignUpProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './schemas';
import { usePromiseTracker } from 'react-promise-tracker';
import { userUseCases } from '../../../domain/useCases/user';
import { userImplementation } from '../../../domain/implementation/user';
import { useLocation } from 'wouter';
import { authPath } from '../../../domain/constants/endpoints';
import toast from 'react-hot-toast';
import { dic } from '../../../common/constants/dictionary';


function useController(props: SignUpProps): SignUpControllerOutputProps {

    const { signUp } = userUseCases(userImplementation());

    const [, setLocation] = useLocation();

    const { register, handleSubmit, formState: { errors, isValid: isValidForm } } = useForm<SignUpFormProps>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
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
        return errors[inputName]?.message || dic.form.fieldRequired;
    }

    function onSignUpSuccess() {
        setLocation(`${ authPath }/login`);
        toast.success(dic.toast.accountCreated, {
            duration: 5000,
        });
    }

    async function onSignUp(data: SignUpFormProps) {
        try {
            await signUp(data);
            onSignUpSuccess();
        } catch (error) {
            console.log(error);
            toast.error(dic.toast.errorHappened, {
                duration: 5000,
            });
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