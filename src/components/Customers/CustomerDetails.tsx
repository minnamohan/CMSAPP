import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomer } from '../../services/customerService';

const CustomerDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [customer, setCustomer] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            try {
                const data = await getCustomer(id!);
                setCustomer(data);
            } catch (error) {
                console.error("Error fetching customer details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomerDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!customer) {
        return <div>Customer not found</div>;
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <p><strong>ID:</strong> {customer.customerId}</p>
            <p><strong>First Name:</strong> {customer.firstName}</p>
            <p><strong>Last Name:</strong> {customer.lastName}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone Number:</strong> {customer.phoneNumber}</p>
            <p><strong>Address:</strong> {customer.address}</p>
        </div>
    );
};

export default CustomerDetails;
