import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCustomer } from '../../services/customerService';

const CreateCustomer: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phoneNumber: Yup.string().required('Phone number is required'),
            address: Yup.string().required('Address is required'),
        }),
        onSubmit: async (values) => {
            try {
                await createCustomer(values);
                navigate('/');
            } catch (error) {
                console.error("Error creating customer:", error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                />
                {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.errors.address ? <div>{formik.errors.address}</div> : null}
            </div>
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateCustomer;
