import * as Yup from 'yup';

export const sampleFormInitialValues = {
    fullName: '',
    comment: '',
    defaultCurrency: '',
    defaultCurrencySearch: '',
    defaultCurrencyMultiSearch: [],
    gender: '',
    hobbies: [],
    searchName: '',
}


export const SampleFormSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    comment: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    defaultCurrency: Yup.string()
        .required('Required'),
    gender: Yup.string()
        .required('Required')
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


export const headers = [
    {
        label: 'first',
        style: {
            align: 'left',
            color: 'red'
        }
    },
    {
        label: 'second'
    }, {
        label: 'third'
    }, {
        label: 'Actions'
    },
];
export const data = [

    {
        first: '1',
        'second': '2',
        'third': 3

    },
    {
        first: '11',
        'second': '21',
        'third': 31

    }, {
        first: '31',
        'second': '32',
        'third': 33,

    }, {
        first: '41',
        'second': '42',
        'third': 43,

    },
];

export const additionalInfo = {
    first: {
        className: '',
        style: '',
        onClick: ''
    },
    second: {
        className: '',
        style: {
            align: 'left',
            color: 'red'
        },
        onClick: ''
    },
    third: {
        className: '',
        style: '',
        onClick: (val) => alert('link click' + val),
        key: 'first'
    }
}
export const actionButtons = [{
    label: 'Add',
    onClick: (val) => alert('add:' + val),
    icon: '',
    key: 'first'
},
    {
        label: 'Edit',
        onClick: (val) => alert('edit:' + val),
        icon: '',
        key: 'second'
    }]



