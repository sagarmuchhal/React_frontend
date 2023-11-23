import React, { useState } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
    const [service, setService] = useState({
        icon: '',
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        setService({
            ...service,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the API endpoint
            const response = await axios.post('http://localhost:4000/add_services', service);

            // Handle the response
            console.log(response.data.message); // Log the success message
            // You can also redirect the user or perform other actions based on the response
        } catch (error) {
            console.error('Error adding service:', error);
            // Handle the error, e.g., display an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="icon">Icon:</label>
                <input type="text" id="icon" name="icon" value={service.icon} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={service.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={service.description} onChange={handleChange} />
            </div>
            <button type="submit">Add Service</button>
        </form>
    );
};

export default AddServiceForm;
