import React, { useState, useEffect } from 'react';
import Index from './/header';
import axios from 'axios';
import Footer from './/footer';


const ServicesList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch services data from the API
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:4000/view_services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
                // Handle the error, e.g., display an error message to the user
            }
        };

        fetchServices();
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div>
        <Index/>
        <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>What We Do</span>
                            <h2>Discover Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className={service.icon}></i>
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
    </div>
    );
};

export default ServicesList;
