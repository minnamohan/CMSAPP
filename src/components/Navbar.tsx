import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../services/authService';

const Navbar: React.FC = () => {
    const user = getCurrentUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <span>Welcome, {user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
