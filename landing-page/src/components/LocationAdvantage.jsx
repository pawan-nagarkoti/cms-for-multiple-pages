import React from "react";

export default function LocationSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI"
            alt="Location"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800">Location Advantage</h1>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-700">Prime Location for a Better Future</h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg">
            Discover the unmatched location advantages that offer seamless connectivity, vibrant surroundings, and convenience at every step.
          </p>

          {/* List */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {["Close to schools and universities", "Near top-rated hospitals", "Proximity to shopping malls", "Easy access to public transport"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Get Visit</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
