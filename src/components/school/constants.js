import * as Yup from 'yup';

export const schoolValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    address: Yup.string()
        .nullable(true),
    contactNumber: Yup.string()
        .nullable(true),
});

export const schoolUserValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    contactNumber: Yup.string()
        .nullable(true),
});

// passwordConfirmation: Yup.string()
//     .oneOf([values.password], 'Passwords are not the same!')
//     .required('Password confirmation is required!'),
//     consent: Yup.bool()
//     .test(
//         'consent',
//         'You have to agree with our Terms and Conditions!',
//         value => value === true
//     )
//     .required(
//         'You have to agree with our Terms and Conditions!'
//     ),
