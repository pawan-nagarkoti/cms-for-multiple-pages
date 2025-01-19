import React from "react";
import { LeadForm } from ".";

export default function Banner() {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen w-full"
        style={{
          backgroundImage: `url('https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA')`, // Replace with your image URL
        }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Banner Content */}
        <div className="container mx-auto">
          <div className="relative z-10 flex items-center justify-between px-8 h-screen">
            {/* Left: Content Box */}
            <div className="bg-white bg-opacity-90 p-8 rounded-md max-w-md shadow-lg w-full">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Amazing Property Offer</h1>
              <p className="text-gray-600 mb-4">Discover the perfect blend of luxury and comfort. Your dream home awaits in the heart of the city.</p>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                Starting from <span className="text-blue-500">₹50 Lakhs</span>
              </p>

              {/* List Items */}
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                  Prime Location
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                  Modern Amenities
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                  Spacious Interiors
                </li>
              </ul>
            </div>

            {/* Right: Blank Box */}
            <div className="bg-white bg-opacity-90 rounded-md max-w-md shadow-lg w-full p-3">
              <LeadForm hideCrossBtn={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
