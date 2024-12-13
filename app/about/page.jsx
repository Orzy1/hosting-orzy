import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <main className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">About Early-Mart</h1>
          <p className="text-lg mt-4">
            Your trusted shopping platform, delivering convenience and quality at your fingertips.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
            <p>
              At Early-Mart, our mission is to simplify your shopping experience. We strive to
              offer a seamless, user-friendly platform where you can explore and purchase quality
              products from the comfort of your home.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Vision</h2>
            <p>
              To become a global leader in online shopping by consistently delivering value,
              fostering trust, and supporting communities through innovation and commitment.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Wide Product Range</h3>
              <p>
                From everyday essentials to luxury items, Early-Mart offers a diverse selection
                tailored to your needs.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p>
                We prioritize your security with robust payment systems that ensure safe and
                hassle-free transactions.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Fast & Reliable Delivery</h3>
              <p>
                Enjoy timely deliveries with our trusted logistics network, bringing products to
                your doorstep efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Join Early-Mart Today</h2>
          <p className="text-lg mb-6">
            Experience the convenience of smarter shopping. Discover, shop, and enjoy!
          </p>
          <Link href={'/auth/signin'} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Explore Now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
