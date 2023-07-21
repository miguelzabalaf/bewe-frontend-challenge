import { mergeValidators } from "../../../common/validators/helpers";
import { emailSchema, passwordSchema, stringRequiredSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { SingUpFormValidatorShapeKeys } from "./types";

export const singUpSchema = Yup.object().shape<SingUpFormValidatorShapeKeys>({
    name: mergeValidators(stringRequiredSchema),
    email: mergeValidators(stringRequiredSchema, emailSchema),
    password: mergeValidators(stringRequiredSchema, passwordSchema),
});
