import { mergeValidators } from "../../../common/validators/helpers";
import { emailSchema, passwordSchema, stringRequiredSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { SignUpFormValidatorShapeKeys } from "./types";

export const signUpSchema = Yup.object().shape<SignUpFormValidatorShapeKeys>({
    name: mergeValidators(stringRequiredSchema),
    email: mergeValidators(stringRequiredSchema, emailSchema),
    password: mergeValidators(stringRequiredSchema, passwordSchema),
});
