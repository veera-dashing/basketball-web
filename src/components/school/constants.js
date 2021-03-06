import * as Yup from 'yup';

export const schoolValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
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
    firstName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .nullable(true),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    contactNumber: Yup.string()
        .nullable(true),
});

export const schoolTeamValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1  , 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
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
