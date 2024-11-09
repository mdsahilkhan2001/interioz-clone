// src/Components/pages/Portfolio.jsx
import React from 'react';
import  '../Portfolio.css'

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Modern Living Room Design',
            description: 'A sleek and modern living room concept with minimalistic elements.',
            imageUrl: '/images/living-room.jpg', // Replace with actual image paths
        },
        {
            id: 2,
            title: 'Elegant Kitchen Interior',
            description: 'A cozy kitchen space with elegant wooden textures and smart storage.',
            imageUrl: '/images/kitchen.jpg',
        },
        {
            id: 3,
            title: 'Luxury Bedroom Decor',
            description: 'A luxurious bedroom design featuring soft lighting and calming tones.',
            imageUrl: '/images/bedroom.jpg',
        },
        // Add more items as needed
    ];

    return (
        <div className="portfolio-container">
            <h1>Our Portfolio</h1>
            <p>Explore some of our latest interior design projects.</p>

            <div className="portfolio-grid">
                {portfolioItems.map((item) => (
                    <div key={item.id} className="portfolio-item">
                        <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
