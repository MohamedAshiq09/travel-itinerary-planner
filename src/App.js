import React from 'react';
import './assets/styles.css'; // Ensure to style the app properly

const App = () => {
    const categories = [
        { label: 'Flight', icon: '✈️', count: '2,421 flights' },
        { label: 'Vacations', icon: '🏖️', count: '1,421 vacations' },
        { label: 'Stays', icon: '🏨', count: '11,648 stays' },
        { label: 'Restaurant', icon: '🍕', count: '8,821 restaurants' },
        { label: 'Attractions', icon: '🎡', count: '3,213 attractions' },
        { label: 'Bus Airport', icon: '🚌', count: '24/7 available' },
    ];

    const destinations = [
        {
            image: 'https://via.placeholder.com/150',
            name: 'Bali, Indonesia',
            places: 'Over 500 places',
            rating: 5.0,
            price: '$25–$1,000/night',
        },
        {
            image: 'https://via.placeholder.com/150',
            name: 'Paris, France',
            places: 'Over 400 places',
            rating: 4.8,
            price: '$100–$4,000/night',
        },
        {
            image: 'https://via.placeholder.com/150',
            name: 'Tokyo, Japan',
            places: 'Over 1,000 places',
            rating: 4.7,
            price: '$80–$3,500/night',
        },
        {
            image: 'https://via.placeholder.com/150',
            name: 'Rome, Italy',
            places: 'Over 600 places',
            rating: 4.9,
            price: '$150–$4,000/night',
        },
    ];

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <h1>Discover the vacation of your dreams</h1>
                <p>Search low prices on flights, hotels, food, and much more...</p>
                <div className="search-bar">
                    <input type="text" placeholder="Going to" />
                    <input type="date" placeholder="Dates" />
                    <input type="number" placeholder="Guests" />
                    <button>Search</button>
                </div>
            </header>

            {/* Categories */}
            <section className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <span className="icon">{category.icon}</span>
                        <div>
                            <h4>{category.label}</h4>
                            <p>{category.count}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Explore Section */}
            <section className="explore">
                <h2>Explore the World</h2>
                <div className="destination-cards">
                    {destinations.map((dest, index) => (
                        <div key={index} className="destination-card">
                            <img src={dest.image} alt={dest.name} />
                            <h3>{dest.name}</h3>
                            <p>{dest.places}</p>
                            <p>⭐ {dest.rating.toFixed(1)}</p>
                            <p>{dest.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default App;
