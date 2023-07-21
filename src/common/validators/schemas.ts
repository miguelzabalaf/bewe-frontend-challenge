import * as Yup from 'yup';
import { hasValidEmail, hasValidUrl } from './regExp';
import { dic } from '../constants/dictionary';

export const stringSchema: Yup.StringSchema = Yup.string()
    .trim();

export const stringRequiredSchema: Yup.StringSchema = Yup.string()
    .trim()
    .required(dic.form.fieldRequired);

export const passwordSchema: Yup.StringSchema = Yup.string()
    .trim()
    .min(6, dic.form.passwordWithMinLength);

export const emailSchema: Yup.StringSchema = Yup.string()
    .trim()
    .matches(hasValidEmail, dic.form.validEmail);

export const urlSchema: Yup.StringSchema = Yup.string()
    .trim()
    .matches(hasValidUrl, dic.form.validUrl);