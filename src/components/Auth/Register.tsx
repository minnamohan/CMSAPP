import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',  // Change from email to username
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),  // Update validation to use username
            password: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                await register(values.username, values.password);  // Update register to use username
                navigate('/login');
            } catch (error) {
                alert('Registration failed');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="username"  // Change from email to username
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}  // Update value to use username
            />
            <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
