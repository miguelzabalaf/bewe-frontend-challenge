import { mergeValidators } from "../../../common/validators/helpers";
import { passwordSchema, stringRequiredSchema, urlSchema } from "../../../common/validators/schemas";
import * as Yup from 'yup';
import { HomeFormValidatorShapeKeys } from "./types";

export const linkSchema = Yup.object().shape<HomeFormValidatorShapeKeys>({
    url: mergeValidators(stringRequiredSchema, urlSchema),
    name: mergeValidators(stringRequiredSchema, passwordSchema),
});
