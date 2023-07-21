import { mergeValidators } from "../../../common/validators/helpers";
import { emailSchema, stringRequiredSchema, stringSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { ProfileFormValidatorShapeKeys } from "./types";

export const profileSchema = Yup.object().shape<ProfileFormValidatorShapeKeys>({
    name: mergeValidators(stringRequiredSchema),
    email: mergeValidators(stringRequiredSchema, emailSchema),
    location: stringSchema,
});
