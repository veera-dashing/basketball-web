import * as Yup from 'yup';

export const schoolInitialValues = {
    name: '',
    shortName: '',
    type: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    fullAddress: '',
    landLine: '',
    landLine2: '',
    fax: '',
    mobile1: '',
    mobile2: '',
    test: 2,
}


export const SchoolSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    shortName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    type: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    // addressLine1: Yup.string()
    //     .required('Required'),
    // addressLine2: Yup.string()
    //     .nullable(true),
    // city: Yup.string()
    //     .required('Required'),
    // state: Yup.string()
    //     .required('Required'),
    // country: Yup.string()
    //     .required('Required'),
    landLine: Yup.string()
        .required('Required'),
    landLine2: Yup.string()
        .nullable(true),
    fax: Yup.string()
        .required('Required'),
    mobile1: Yup.string()
        .required('Required'),
    mobile2: Yup.string()
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
