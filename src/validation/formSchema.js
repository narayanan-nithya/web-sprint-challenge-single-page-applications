import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter a name')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Pizza size selection is required!!!'),
    sauce: yup
        .string()
        .oneOf(['red', 'white'], 'Pizza Sauce  selection is required!!!'),
    special: yup
        .string()
        .trim(),

    olives: yup.boolean(),
    capers: yup.boolean(),
    onions: yup.boolean(),
    bellpeppers: yup.boolean()
})
export default formSchema;

