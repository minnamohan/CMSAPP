import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomers, deleteCustomer } from '../../services/customerService';
import { Customer } from '../../types';

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCustomers() {
            try {
                const data = await getCustomers();
                setCustomers(data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        }

        fetchCustomers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteCustomer(id);
            setCustomers(customers.filter(customer => customer.customerId !== id));
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    };

    return (
        <div>
            <h1>Customers</h1>
            <button onClick={() => navigate('/create-customer')}>Create New Customer</button>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customerId}>
                        {customer.firstName} {customer.lastName}
                        <button onClick={() => navigate(`/edit-customer/${customer.customerId}`)}>Edit</button>
                        <button onClick={() => navigate(`/customer-details/${customer.customerId}`)}>Details</button>
                        <button onClick={() => handleDelete(customer.customerId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
