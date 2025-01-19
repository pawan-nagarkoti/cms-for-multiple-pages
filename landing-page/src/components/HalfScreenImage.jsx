import React from "react";

export default function HalfScreenImage() {
  return (
    <section className="bg-gray-100">
      {/* Image */}
      <div className="h-[50vh] w-full">
        <img
          src="https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ"
          alt="Half Screen Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
