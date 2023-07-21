import { mergeValidators } from "../../../common/validators/helpers";
import { emailSchema, passwordSchema, stringRequiredSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { LoginFormValidatorShapeKeys } from "./types";

export const loginSchema = Yup.object().shape<LoginFormValidatorShapeKeys>({
    email: mergeValidators(stringRequiredSchema, emailSchema),
    password: mergeValidators(stringRequiredSchema, passwordSchema),
});
