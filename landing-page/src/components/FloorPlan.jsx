import React from "react";

export default function FloorPlan() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Floor Plans</h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative group">
              {/* Floor Plan Image */}
              <img
                src={`https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q`}
                alt={`Floor Plan ${item}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">Floor Plan {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
