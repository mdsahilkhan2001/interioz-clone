// src/Components/pages/Services.jsx
import React from 'react';

const Services = () => (
    <div className="services-container">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer at Interioz to transform your spaces.</p>

        <section className="service-item">
            <h2>Interior Design Consultation</h2>
            <p>We provide expert advice to help you create the perfect layout and ambiance for your space.</p>
        </section>

        <section className="service-item">
            <h2>Custom Furniture Design</h2>
            <p>Our team can design and produce custom furniture to suit your style and needs.</p>
        </section>

        <section className="service-item">
            <h2>3D Rendering and Visualization</h2>
            <p>Visualize your future space with our 3D rendering services before making any final decisions.</p>
        </section>

        {/* Add additional services as needed, following the same structure */}
    </div>
);

export default Services;
