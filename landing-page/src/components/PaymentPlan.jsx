import React from "react";

export default function PaymentPlan() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">List and Payment Plan</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-gray-800">2BHK</h2>

              {/* Line for Size */}
              <p className="text-gray-600">
                Size: <span className="font-medium">0</span>
              </p>

              {/* Square Feet and Price */}
              <div className="text-lg font-medium text-gray-700">
                <p>9999 SQFT</p>
                <p>$9999</p>
              </div>

              {/* Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Price Detail</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
