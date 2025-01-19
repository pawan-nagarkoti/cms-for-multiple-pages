import React from "react";

export default function ProjectIntroduction() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center space-y-6">
        {/* Project Name */}
        <h1 className="text-4xl font-bold text-gray-800">About Project</h1>

        {/* Project Description */}
        <p className="text-gray-700 text-lg leading-relaxed  mx-auto">
          Welcome to <span className="font-semibold">Project Name</span>, a unique blend of luxury and functionality designed to meet all your lifestyle needs.
          With its modern amenities, prime location, and thoughtfully crafted spaces, this project redefines urban living. Experience unparalleled convenience
          with proximity to schools, hospitals, and shopping centers. Surrounded by lush greenery and open spaces, it offers a serene escape from the bustling
          city life. Our state-of-the-art facilities, including a gymnasium, clubhouse, and swimming pool, ensure your every need is catered to. Built with a
          commitment to quality and excellence, <span className="font-semibold">Project Name</span> is the perfect place to call home. Explore a new dimension
          of comfort, style, and sustainability with us today.
        </p>
      </div>
    </section>
  );
}
