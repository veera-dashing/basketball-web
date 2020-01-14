import React from 'react'
import ReactSearchBox from 'react-search-box'
import Select from 'react-select'

export const FormItem = (props => {
    const {label, ...inputProps} = props;
    const {errors, touched} = props.formik;
    return (
        <div>
            {label && <label>{label}</label>}

            <FormInput {...inputProps} />

            {errors[inputProps.name] && touched[inputProps.name] && <p>{errors[inputProps.name]}</p>}
        </div>
    );
});

function extractInputProps({formik, options, ...otherProps}, option) {
    const props = {
        value: formik.values[otherProps.name],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        ...otherProps
    }

    if (props.type === 'checkbox') {
        props.value = option.value;
        props.checked = formik.values[props.name] && formik.values[props.name].includes(option.value);
        props.onChange = e => {
            const val = formik.values[props.name];
            e.target.checked
                ? val.push(e.target.value)
                : val.splice(val.indexOf(e.target.value));
            formik.setFieldValue(val);
        }
    } else if (props.type === 'radio') {
        props.value = option.value;
        props.checked = option.value === formik.values[props.name];
    } else if (props.type === 'searchBox' || props.type === 'search') {
        props.options = options;
        props.onChange = val => {
            formik.setFieldValue(props.name, val);
        }
    }

    return props;
}

const FormInput = props => {
    switch (props.type) {
        case 'radio':
        case 'checkbox':
            return CheckInput(props);
        case 'select':
            return SelectInput(props);
        case 'textarea':
            return TextAreaInput(props);
        case 'searchBox':
            return SearchBox(props);
        case 'search':
            return SearchList(props);
        default:
            return TextInput(props);
    }
}

const TextInput = props => <input {...extractInputProps(props)} />
const TextAreaInput = props => <textarea {...extractInputProps(props)} />

const SelectInput = props => (
    <select {...extractInputProps(props)}>
        <option value="">Select a value</option>
        {props.options.map(o =>
            <option key={o.value} value={o.value}>{o.label || o.value}</option>)}
    </select>
);

const SearchBox = (props) => (
    <ReactSearchBox
        {...extractInputProps(props)}
    />
)
const SearchList = (props) => (
    <Select {...extractInputProps(props)}  />
)
const CheckInput = props => (
    <>
        {props.options.map(option => (
            <label key={option.value}>
                <input {...extractInputProps(props, option)} />
                {option.label || option.value}
            </label>
        ))}
    </>
);
