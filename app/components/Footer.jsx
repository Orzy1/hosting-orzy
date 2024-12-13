import React from 'react';

const Footer = () => {
  return (
    <main>
      <section className="p-[2rem] bg-gray-800 text-white flex flex-col gap-8 max-lg:px-5">

        <h3 className="font-black lg:text-4xl text-3xl text-center">
          Early Mart
        </h3>

        <div className="flex flex-col gap-8">
          <div className="flex gap-5 items-center justify-center max-lg:flex-col">
            <p className="hover:text-orange-500 duration-500 cursor-pointer">FAQs</p>
            <p className="hover:text-orange-500 duration-500 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-orange-500 duration-500 cursor-pointer">Terms of Use</p>
            <p className="hover:text-orange-500 duration-500 cursor-pointer">Bug Bounty</p>
            <p className="hover:text-orange-500 duration-500 cursor-pointer">Customer Service</p>
          </div>

          <p className="text-center">Help Line Number : +1 1800 1200 1200</p>

          <span className="text-center">
            <i className="fa-solid fa-copyright"></i>
            2020 All Rights Reserved. Design by Free Early Mart
          </span>
        </div>

      </section>
    </main>
  )
}

export default Footer