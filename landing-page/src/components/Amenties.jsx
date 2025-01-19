import React from "react";

export default function Amenities() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Amenities</h1>

        {/* Grid for Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Boxes */}
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              {/* Circle Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={`https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I`}
                  alt={`Amenity ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg font-medium">Amenity {index + 1}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Book Now</button>
        </div>
      </div>
    </section>
  );
}
