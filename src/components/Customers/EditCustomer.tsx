import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCustomer, updateCustomer } from '../../services/customerService';
import { Customer } from '../../types';

const EditCustomer: React.FC = () => {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const data = await getCustomer(id!);
                setCustomer(data);
            } catch (error) {
                setError('Error fetching customer data.');
            } finally {
                setLoading(false);
            }
        };

        fetchCustomer();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (customer) {
            setCustomer({
                ...customer,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (customer) {
            try {
                await updateCustomer(id!, customer); // Ensure `id` is passed correctly
                navigate('/customers');
            } catch (error) {
                setError('Error updating customer.');
            }
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!customer) return <p>Customer not found</p>;

    return (
        <div>
            <h1>Edit Customer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={customer.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditCustomer;
