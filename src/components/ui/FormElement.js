import React from "react";

const RenderErrorMsg = ({name, formik}) => {
    return (formik.touched && formik.errors[name]) ?
        <div className="form-field-error">{formik.errors[name]}</div> : <></>
}
export const RenderInputField = ({name, label, type, formik,...props}) => {
    return (<>
        <label className="form-field" htmlFor={name}>
            <span>{label}:</span>
            <input
                id={name}
                name={name}
                type={type ? type : 'text'}
                placeholder={label}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                {...props}
            />
        </label>
        <RenderErrorMsg name={name} formik={formik}/>
    </>)
}


export const RenderRadioButton = ({label, name, formik, ...props}) => {

    return (<>
        <label className="form-field" htmlFor={name}>
            <span>{label}:</span>
            <input
                name={name}
                id={name}
                type="radio"
                value={name} // could be something else for output?
                checked={name === formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                {...props}
            />
        </label>
    </>)
}
