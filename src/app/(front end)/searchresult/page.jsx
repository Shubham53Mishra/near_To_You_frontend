'use client'; // Add this line at the top to make the component a Client Component
import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';

// Mock Data Array
const mockData = [
    {
        id: 1,
        image: '/girl.svg',
        serviceTitle: 'Home Cleaning Services',
        serviceType: 'Home Cleaning',
        rating: 5.0,
        reviews: 48,
        hiredCount: 99,
        responseTime: 'about 30 min',
        description: 'Complete home cleaning services.',
        price: 250,
        availability: 'starting price',
        frequency: 'One-time',
        bedrooms: 2,
        cleaningType: 'Deep Cleaning',
        startTime: 'Within 24 hours',
    },
    {
        id: 2,
        image: '/girl.svg',
        serviceTitle: 'Carpet Cleaning',
        serviceType: 'Carpet Cleaning',
        rating: 4.8,
        reviews: 35,
        hiredCount: 75,
        responseTime: 'about 1 hour',
        description: 'Professional carpet cleaning.',
        price: 120,
        availability: 'per room',
        frequency: 'Recurring',
        bedrooms: 1,
        cleaningType: 'Surface Cleaning',
        startTime: 'Within a week',
    },
    {
        id: 3,
        image: '/girl.svg',
        serviceTitle: 'Window Cleaning',
        serviceType: 'Window Cleaning',
        rating: 4.9,
        reviews: 58,
        hiredCount: 120,
        responseTime: 'within 1 hour',
        description: 'Expert window cleaning.',
        price: 100,
        availability: 'starting price',
        frequency: 'One-time',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Flexible',
    },
    {
        id: 4,
        image: '/girl.svg',
        serviceTitle: 'Laundry Service',
        serviceType: 'Laundry',
        rating: 4.7,
        reviews: 60,
        hiredCount: 90,
        responseTime: 'about 45 min',
        description: 'Wash, dry, fold, and delivery.',
        price: 80,
        availability: 'per load',
        frequency: 'Recurring',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Within 24 hours',
    },
    {
        id: 5,
        image: '/girl.svg',
        serviceTitle: 'Office Cleaning',
        serviceType: 'Office Cleaning',
        rating: 4.9,
        reviews: 25,
        hiredCount: 50,
        responseTime: 'about 1 hour',
        description: 'Deep cleaning for office spaces.',
        price: 200,
        availability: 'starting price',
        frequency: 'Recurring',
        bedrooms: 0,
        cleaningType: 'Deep Cleaning',
        startTime: 'Within a week',
    },
    {
        id: 6,
        image: '/girl.svg',
        serviceTitle: 'Pressure Washing',
        serviceType: 'Pressure Washing',
        rating: 4.8,
        reviews: 72,
        hiredCount: 150,
        responseTime: 'about 30 min',
        description: 'Pressure washing for exterior surfaces.',
        price: 180,
        availability: 'per square foot',
        frequency: 'One-time',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Flexible',
    },
    {
        id: 7,
        image: '/girl.svg',
        serviceTitle: 'Pest Control',
        serviceType: 'Pest Control',
        rating: 5.0,
        reviews: 40,
        hiredCount: 95,
        responseTime: 'about 30 min',
        description: 'Extermination and prevention services.',
        price: 150,
        availability: 'per service',
        frequency: 'Recurring',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Within 24 hours',
    },
    {
        id: 8,
        image: '/girl.svg',
        serviceTitle: 'Gutter Cleaning',
        serviceType: 'Gutter Cleaning',
        rating: 4.7,
        reviews: 52,
        hiredCount: 110,
        responseTime: 'within 1 hour',
        description: 'Cleaning and maintenance of gutters.',
        price: 130,
        availability: 'per service',
        frequency: 'One-time',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Within a week',
    },
    {
        id: 9,
        image: '/girl.svg',
        serviceTitle: 'Roof Cleaning',
        serviceType: 'Roof Cleaning',
        rating: 4.6,
        reviews: 60,
        hiredCount: 80,
        responseTime: 'about 1 hour',
        description: 'Cleaning of roof tiles and surfaces.',
        price: 250,
        availability: 'starting price',
        frequency: 'One-time',
        bedrooms: 0,
        cleaningType: 'Surface Cleaning',
        startTime: 'Flexible',
    },
    {
        id: 10,
        image: '/girl.svg',
        serviceTitle: 'Furniture Cleaning',
        serviceType: 'Furniture Cleaning',
        rating: 4.9,
        reviews: 67,
        hiredCount: 130,
        responseTime: 'about 30 min',
        description: 'Deep cleaning for furniture and upholstery.',
        price: 90,
        availability: 'per item',
        frequency: 'Recurring',
        bedrooms: 0,
        cleaningType: 'Deep Cleaning',
        startTime: 'Within 24 hours',
    }
];




const Page = () => {
    const [filters, setFilters] = useState({
        serviceType: [],
        frequency: [],
        bedrooms: [],
        cleaningType: [],
        startTime: [],
    });

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            setFilters({ ...filters, [name]: [...filters[name], value] });
        } else {
            setFilters({ ...filters, [name]: filters[name].filter((item) => item !== value) });
        }
    };

    const filteredData = mockData.filter((service) => {
        return (
            (!filters.serviceType.length || filters.serviceType.includes(service.serviceType)) &&
            (!filters.frequency.length || filters.frequency.includes(service.frequency)) &&
            (!filters.bedrooms.length || filters.bedrooms.includes(service.bedrooms.toString())) &&
            (!filters.cleaningType.length || filters.cleaningType.includes(service.cleaningType)) &&
            (!filters.startTime.length || filters.startTime.some(option => service.startTime.includes(option)))
        );
    });

    return (
        <div className="overflow-hidden h-screen bg-white text-black">
            <Navbar />

            <div className="flex flex-col lg:flex-row h-full">
                {/* Button to show filter menu */}
                <button
                    className={`lg:hidden fixed p-4 z-40 ${isFilterVisible ? 'hidden' : 'block'}`} // Hide button when menu is open
                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                >
                    Filters
                </button>

                {/* Filters Sidebar (Sliding) */}
                <div
                    className={`${isFilterVisible ? 'translate-x-0' : '-translate-x-full'} 
                        lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:relative left-0 w-[80vw] sm:w-[25vw] bg-gray-100 p-6 h-full overflow-y-auto border-r border-gray-300 z-40`}
                >
                    {/* Close Button for Mobile View */}
                    <button
                        className="lg:hidden sticky top-0  pl-[60vw] text-xl text-black z-50"
                        onClick={() => setIsFilterVisible(false)}
                    >
                        &times; {/* Close icon */}
                    </button>

                    <h2 className="text-xl font-bold mb-5 text-black hidden lg:block">Filters</h2>

                    {/* Service Type */}
                    <div className="mb-5 mt-6 sm:mt-0">
                        <label className="block text-base font-medium text-black mb-3">Service Type</label>
                        <div className="space-y-2">
                            {['Home Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Laundry Service', 'Office Cleaning', 'Pressure Washing', 'Pest Control', 'Gutter Cleaning', 'Roof Cleaning', 'Furniture Cleaning'].map((service) => (
                                <label
                                    key={service}
                                    className="flex items-center space-x-2 cursor-pointer text-black text-sm sm:text-base"
                                >
                                    <input
                                        type="checkbox"
                                        name="serviceType"
                                        value={service}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 appearance-none border border-gray-700 rounded-full checked:bg-black checked:border-black cursor-pointer"
                                    />
                                    <span>{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Frequency */}
                    <div className="mb-5">
                        <label className="block text-base font-medium text-black mb-3">Frequency</label>
                        <div className="space-y-2">
                            {['One-time', 'Recurring'].map((freq) => (
                                <label
                                    key={freq}
                                    className="flex items-center space-x-2 cursor-pointer text-black text-sm sm:text-base"
                                >
                                    <input
                                        type="checkbox"
                                        name="frequency"
                                        value={freq}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 appearance-none border border-gray-700 rounded-full checked:bg-black checked:border-black cursor-pointer"
                                    />
                                    <span>{freq}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="mb-5">
                        <label className="block text-base font-medium text-black mb-3">Number of Bedrooms</label>
                        <div className="space-y-2">
                            {[0, 1, 2, 3, 4].map((bedroom) => (
                                <label
                                    key={bedroom}
                                    className="flex items-center space-x-2 cursor-pointer text-black text-sm sm:text-base"
                                >
                                    <input
                                        type="checkbox"
                                        name="bedrooms"
                                        value={bedroom}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 appearance-none border border-gray-700 rounded-full checked:bg-black checked:border-black cursor-pointer"
                                    />
                                    <span>
                                        {bedroom} {bedroom === 1 ? 'Bedroom' : 'Bedrooms'}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Start Time */}
                    <div className="mb-5">
                        <label className="block text-base font-medium text-black mb-3">When do you want to start?</label>
                        <div className="space-y-2">
                            {['Within 24 hours', 'Within a week', 'Flexible'].map((time) => (
                                <label
                                    key={time}
                                    className="flex items-center space-x-2 cursor-pointer text-black text-sm sm:text-base"
                                >
                                    <input
                                        type="checkbox"
                                        name="startTime"
                                        value={time}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 appearance-none border border-gray-700 rounded-full checked:bg-black checked:border-black cursor-pointer"
                                    />
                                    <span>{time}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-[80vw] overflow-y-auto p-4 space-y-4 mt-12 sm:mt-0">
                    {filteredData.map((service) => (
                        <div
                            key={service.id}
                            className="w-full mb-4 bg-white shadow-lg rounded-lg p-4 lg:p-6 border-gray-800 border-[0.1vw] flex flex-col lg:flex-row"
                        >
                            <div className="flex-shrink-0 flex items-center justify-center h-full mb-4 lg:mb-0">
                                <img
                                    src={service.image}
                                    alt={service.serviceTitle}
                                    className="w-[80%] lg:w-[10vw] h-[80%] lg:h-[10vw] rounded-full object-cover mx-auto"
                                />
                            </div>
                            <div className="ml-0 lg:ml-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">{service.serviceTitle}</h2>
                                    <div className="flex items-center mt-1">
                                        <span className="text-gray-700">{service.rating.toFixed(1)}</span>
                                        <span className="ml-2 text-gray-600">★★★★★</span>
                                        <span className="ml-2 text-gray-600">({service.reviews})</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2">
                                        <p>Hired {service.hiredCount} times</p>
                                        <p>Responds in {service.responseTime}</p>
                                    </div>
                                </div>
                                <div className="mt-2 text-gray-600 text-sm">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className="ml-0 lg:ml-6 flex flex-col items-end justify-between h-full">
                                <div className="text-lg font-semibold text-gray-900">
                                    <span>${service.price}</span>
                                    <span className="text-sm text-gray-600"> {service.availability}</span>
                                </div>
                                <button
                                    className="bg-black text-white py-2 px-4 mt-4 rounded-lg hover:bg-gray-800"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;