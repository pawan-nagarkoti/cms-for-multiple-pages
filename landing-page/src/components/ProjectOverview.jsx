import React from "react";

export default function ProjectOverview() {
  return (
    <section className="container mx-auto">
      <div className="h-screen bg-gray-100 flex items-center px-8 justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800">Project Overview</h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-700">Amazing Property</h2>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            Discover the perfect blend of luxury and comfort. This property offers modern amenities, prime location, and spacious interiors to suit all your
            needs.
          </p>

          {/* Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Download Brochure</button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
            alt="Project"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
