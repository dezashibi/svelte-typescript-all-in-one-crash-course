export { default as FormField } from './FormField.svelte';
export { default as ChildForm } from './ChildForm.svelte';

export interface FormContext {
    values: any,
    errors: any,
    showErrors: boolean,
};

export const formKey = Symbol();

export const validateRequiredField = (value: string, label = "Field"): string => {
    let error: string = "";

    if (!value) {
        error = `the '${label}' is required`;
    }

    return error;
};

export const validateEmail = (value: string, label = "Email"): string => {
    let error: string = "";

    if (value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        error = `the '${label}' is invalid`;
    }

    return error;
}