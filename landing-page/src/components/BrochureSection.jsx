import React from "react";

export default function BrochureSection() {
  return (
    <section className="bg-blue-100 flex items-center justify-center rounded-lg shadow-lg">
      <div className="container flex items-center gap-6  p-6 mx-auto">
        {/* Left: Image */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src="https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q"
            alt="Human"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Text and Button */}
        <div className="space-y-4 text-center">
          {/* Paragraph */}
          <p className="text-gray-700 text-lg">
            Discover the benefits of this amazing property. Learn more about the unique features and offerings tailored just for you.
          </p>

          {/* Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
