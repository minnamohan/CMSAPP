import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/Customers/CustomerList';
import CreateCustomer from './components/Customers/CreateCustomer';
import EditCustomer from './components/Customers/EditCustomer';
import CustomerDetails from './components/Customers/CustomerDetails';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CustomerList />} />
                <Route path="/create-customer" element={<CreateCustomer />} />
                <Route path="/edit-customer/:id" element={<EditCustomer />} />
                <Route path="/customer-details/:id" element={<CustomerDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
