import React from "react";

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Gallery</h1>

        {/* Grid for the Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Boxes */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img
                src={`https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I`}
                alt={`Box ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
