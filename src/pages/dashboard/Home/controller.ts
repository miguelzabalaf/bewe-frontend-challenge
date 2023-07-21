import { useForm } from 'react-hook-form';
import { HomeControllerOutputProps, HomeFormKeys, HomeFormProps, HomeProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { linkSchema } from './schemas';
import { usePromiseTracker } from 'react-promise-tracker';
import { profileSelectors } from '../../../config/redux/selectors/profile';
import { useSelector } from 'react-redux';
import { linkUseCases } from '../../../domain/useCases/link';
import { linkImplementation } from '../../../domain/implementation/link';
import { LinkRegistered } from '../../../domain/models/link';
import { useEffect, useState } from 'react';
import { DeleteLinkParams } from '../../../domain/reposiories/link';
import toast from 'react-hot-toast';
import { dic } from '../../../common/constants/dictionary';


function useController(props: HomeProps): HomeControllerOutputProps {

    const [linksPath, setLinksPath] = useState<LinkRegistered[]>([]);

    const { addLink, deleteLink, getLinks } = linkUseCases(linkImplementation());

    const { register, handleSubmit, reset, formState: { errors, isValid: isValidForm } } = useForm<HomeFormProps>({
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
        return errors[inputName]?.message || dic.form.fieldRequired;
    }

    async function onGetLinks() {
        try {
            const resp = await getLinks();
            setLinksPath(resp.data);
        } catch (error) {
            toast.error(dic.toast.errorHappened, {
                duration: 5000,
            });
        }
    }

    async function onCreateLink(data: HomeFormProps) {
        try {
            await addLink(data);
            reset();
            await onGetLinks();
        } catch (error) {
            console.log(error);
        }
    }

    function onSubmit(data: HomeFormProps) {
        onCreateLink(data);
    }

    async function onDeleteLink(params: DeleteLinkParams) {
        try {
            await deleteLink({ id: params.id });
            await onGetLinks();
        } catch (error) {
            console.log(error);
            toast.error(dic.toast.errorHappened, {
                duration: 5000,
            });
        }
    }

    useEffect(() => {
        onGetLinks();
    }, []);

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
        linksPath,
        onDeleteLink,
        ...props
    };
}

export default useController;