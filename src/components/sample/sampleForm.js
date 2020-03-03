import React from 'react';
import { useFormik } from 'formik';

import { FormItem } from '../ui/FormItem'
import { sampleFormInitialValues, SampleFormSchema } from "./constants";

export const SampleForm = ({ onSaveSchool }) => {
    const formik = useFormik({
        initialValues: sampleFormInitialValues,
        validationSchema: SampleFormSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            onSaveSchool(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            {
                console.log('errors.......', formik.errors, 'values-----', formik.values)
            }
            <FormItem
                type="text"
                label="Full Name"
                name="fullName"
                formik={formik}
            />
            <FormItem
                type="textarea"
                label="Comment"
                name="comment"
                formik={formik}
            />
            <FormItem
                type="select"
                label="Default Currency"
                name="defaultCurrency"
                options={[
                    { value: 'USD', label: 'American Dollar' },
                    { value: 'EUR', label: 'Euro' }
                ]}
                formik={formik}
            />
            <FormItem
                type="search"
                label="Default Currency"
                name="defaultCurrencySearch"
                options={[
                    { value: 'USD', label: 'American Dollar' },
                    { value: 'EUR', label: 'Euro' }
                ]}
                formik={formik}
            />
            <FormItem
                type="search"
                label="Default Currency"
                name="defaultCurrencyMultiSearch"
                isMulti={true}
                options={[
                    { value: 'USD', label: 'American Dollar' },
                    { value: 'EUR', label: 'Euro' }
                ]}
                formik={formik}
            />
            <FormItem
                type="radio"
                label="Gender"
                name="gender"
                options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' }
                ]}
                formik={formik}
            />
            <FormItem
                type="checkbox"
                label="Hobbies"
                name="hobbies"
                options={[
                    { value: 'baking', label: 'Baking' },
                    { value: 'dance', label: 'Dance' }
                ]}
                formik={formik}
            />
            <FormItem
                type="searchBox"
                label="Search name"
                name="searchName"
                data={[
                    {
                        key: 'john',
                        value: 'John Doe',
                    },
                    {
                        key: 'jane',
                        value: 'Jane Doe',
                    },
                    {
                        key: 'mary',
                        value: 'Mary Phillips',
                    },
                    {
                        key: 'robert',
                        value: 'Robert',
                    },
                    {
                        key: 'karius',
                        value: 'Karius',
                    },
                ]}
                formik={formik}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
