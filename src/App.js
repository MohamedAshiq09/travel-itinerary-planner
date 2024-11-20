import React from 'react';
import { Globe, MapPin, Calendar, Users, Search, Filter, Navigation2, TrendingUp, Award, Sparkles } from 'lucide-react';
import './assets/styles.css'; 

const TravelApp = () => {
  const categories = [
    { name: 'Car Rentals', count: null, icon: '🚗' },
    { name: 'Flight', count: '2,421 flights', icon: '✈️' },
    { name: 'Vacations', count: '1,421 vacations', icon: '🧳' },
    { name: 'Stays', count: '11,648 stays', icon: '🏨' },
    { name: 'Restaurant', count: '8,621 restaurants', icon: '🍽️' },
    { name: 'Attractions', count: '3,213 attractions', icon: '🎡' },
    { name: 'Bus Airport', count: '24/7 available', icon: '🚌' }
  ];

  const destinations = [
    {
      city: 'Bali, Indonesia',
      image: '/api/placeholder/400/200',
      rating: 5.0,
      places: 'Over 500 places',
      price: '$25-$1,000/night'
    },
    {
      city: 'Paris, France',
      image: '/api/placeholder/400/200',
      rating: 4.8,
      places: 'Over 500 places',
      price: '$100-$4,000/night'
    },
    {
      city: 'Tokyo, Japan',
      image: '/api/placeholder/400/200',
      rating: 4.7,
      places: 'Over 1,000 places',
      price: '$80-$3,500/night'
    },
    {
      city: 'Rome, Italy',
      image: '/api/placeholder/400/200',
      rating: 4.9,
      places: 'Over 600 places',
      price: '$150-$4,000/night'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <nav className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-lg text-gray-700">OrelyTrip</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-neutral-100 rounded-full px-6 py-3 shadow-sm">
                <MapPin className="w-5 h-5" />
                <span>Going to</span>
                <Calendar className="w-5 h-5" />
                <span>Dates</span>
                <Users className="w-5 h-5" />
                <span>Guests</span>
                <button className="bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full p-3 shadow-lg hover:opacity-90 transition duration-300">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">Discover the vacation of your dreams</h1>
            <p className="text-gray-600 text-lg">Find the best deals on flights, hotels, restaurants, and more!</p>
          </div>

          {/* Categories */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gradient-to-tr from-neutral-200 to-neutral-100 rounded-xl p-6 shadow-md flex items-center space-x-3 hover:scale-105 transition transform duration-300"
              >
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <div className="font-medium text-lg">{category.name}</div>
                  {category.count && (
                    <div className="text-sm text-gray-500">{category.count}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div className="p-6 bg-neutral-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Explore the world</h2>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow hover:bg-neutral-100">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
              <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow hover:bg-neutral-100">
                <Navigation2 className="w-5 h-5" />
                <span>Nearby</span>
              </button>
              <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow hover:bg-neutral-100">
                <TrendingUp className="w-5 h-5" />
                <span>Popular</span>
              </button>
              <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow hover:bg-neutral-100">
                <Award className="w-5 h-5" />
                <span>Recommendation</span>
              </button>
              <button className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 shadow hover:bg-neutral-100">
                <Sparkles className="w-5 h-5" />
                <span>New</span>
              </button>
            </div>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{destination.city}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
                    <span>{destination.places}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      ⭐ {destination.rating}
                    </span>
                  </div>
                  <div className="text-md font-medium text-gray-800">
                    Start from {destination.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelApp;
