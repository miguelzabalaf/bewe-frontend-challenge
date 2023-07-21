import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePromiseTracker } from 'react-promise-tracker';
import { loginSchema } from './schemas';
import { LoginControllerOutputProps, LoginFormKeys, LoginFormProps, LoginProps } from './types';
import { userUseCases } from '../../../domain/useCases/user';
import { userImplementation } from '../../../domain/implementation/user';
import { useLocation } from 'wouter';
import { useDispatch } from 'react-redux';
import { UserLogged } from '../../../domain/models/user';
import { profileActions } from '../../../config/redux/actions/profile';
import axios from 'axios';
import { setDefaultToken } from './helpers';


function useController(props: LoginProps): LoginControllerOutputProps {

    const { login } = userUseCases(userImplementation());

    const [, setLocation] = useLocation();

    const { onChangeToken, onChangeUser } = profileActions();

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors, isValid: isValidForm } } = useForm<LoginFormProps>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema) as any,
        mode: 'all'
    });

    const { promiseInProgress: loading } = usePromiseTracker();

    function hasInputError(inputName: LoginFormKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: LoginFormKeys) {
        return inputName.toString();
    }

    function getInputErrorMessage(inputName: LoginFormKeys) {
        return errors[inputName]?.message || 'This field is required';
    }

    function onLoginSuccess() {
        setLocation('/');
    }

    function dispatchActions(params: UserLogged) {
        dispatch(onChangeToken(params.token));
        dispatch(onChangeUser(params.data));
        onLoginSuccess();
    }


    async function onLogin(data: LoginFormProps) {
        try {
            const resp = await login(data);
            setDefaultToken(resp.token);
            dispatchActions(resp);
        } catch (error) {
            console.log(error);
        }
    }

    function onSubmit(data: LoginFormProps) {
        onLogin(data);
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