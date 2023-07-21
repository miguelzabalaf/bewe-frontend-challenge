import * as Yup from 'yup';
import { hasValidEmail, hasValidUrl } from './regExp';

export const stringSchema: Yup.StringSchema = Yup.string()
    .trim();

export const stringRequiredSchema: Yup.StringSchema = Yup.string()
    .trim()
    .required('This field is required');

export const passwordSchema: Yup.StringSchema = Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters long');

export const emailSchema: Yup.StringSchema = Yup.string()
    .trim()
    .matches(hasValidEmail, 'A valid email is required');

export const urlSchema: Yup.StringSchema = Yup.string()
    .trim()
    .matches(hasValidUrl, 'A valid URL is required');