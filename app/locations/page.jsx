import Link from 'next/link';
import React from 'react';

const Locations = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">Our Locations</h1>
          <p className="text-lg mt-4">
            Find Early-Mart stores near you! We're expanding to serve you better.
          </p>
        </div>

        {/* Locations Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Kubwa</h2>
            <p className="text-sm mb-4">123 Market Street, Suite 400</p>
            <p className="text-gray-600 mb-2">Opening Hours: 9 AM - 9 PM</p>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View on Map
            </button>
          </div>

          {/* Location 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Lagos</h2>
            <p className="text-sm mb-4">123 Anytown</p>
            <p className="text-gray-600 mb-2">Opening Hours: 10 AM - 8 PM</p>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View on Map
            </button>
          </div>

          {/* Location 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Nyanya</h2>
            <p className="text-sm mb-4">789 Broadway Avenue</p>
            <p className="text-gray-600 mb-2">Opening Hours: 8 AM - 10 PM</p>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View on Map
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Locate Us on the Map</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Placeholder</p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">We're Always Growing</h2>
          <p className="text-lg mb-6">
            Can't find a location near you? Stay tuned—we're expanding to serve more cities soon.
          </p>
          <Link href={'/contact'} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Locations;
