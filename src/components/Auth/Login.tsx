import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const Login: React.FC = () => {
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
                await login(values.username, values.password);  // Update login to use username
                navigate('/');
            } catch (error) {
                alert('Login failed');
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
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
