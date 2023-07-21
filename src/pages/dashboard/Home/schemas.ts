import { mergeValidators } from "../../../common/validators/helpers";
import { emailSchema, passwordSchema, stringRequiredSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { HomeFormValidatorShapeKeys } from "./types";

export const linkSchema = Yup.object().shape<HomeFormValidatorShapeKeys>({
    url: mergeValidators(stringRequiredSchema, emailSchema),
    name: mergeValidators(stringRequiredSchema, passwordSchema),
});
