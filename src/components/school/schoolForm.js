import React from 'react';
import {useFormik} from 'formik';
import {schoolInitialValues, SchoolSchema} from "./constants";
import {RenderInputField, RenderRadioButton} from "../ui/FormElement";

export const SchoolForm = ({onSaveSchool}) => {
    const formik = useFormik({
        initialValues: schoolInitialValues,
        validationSchema: SchoolSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            onSaveSchool(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'School name'} formik={formik}/>
            <RenderInputField name={'shortName'} label={'Short name'} formik={formik}/>
            <RenderInputField name={'type'} label={'School type'} formik={formik}/>
            <RenderInputField name={'email'} label={'School email'} type='email' formik={formik}/>
            <RenderInputField name={'landLine'} label={'Primary phone'} formik={formik}/>
            <RenderInputField name={'landLine2'} label={'Secondary Phone'} formik={formik}/>
            <RenderInputField name={'fax'} label={'Fax'} formik={formik}/>
            <RenderInputField name={'mobile1'} label={'Mobile number'} formik={formik}/>
            <RenderInputField name={'mobile2'} label={'Mobile number 2'} formik={formik}/>
            <RenderInputField name={'fullAddress'} label={'School address'} formik={formik}/>
            <RenderInputField name={'fullAddress'} label={'Main branch'} formik={formik} type={'checkbox'}/>
            <RenderRadioButton name={'test'} value={1} label ={'test'} formik={formik}/>
            <RenderRadioButton name={'test'} value={2} label ={'test'} formik={formik}/>
            <button type="submit">Submit</button>
        </form>
    );
};
