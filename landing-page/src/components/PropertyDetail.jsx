import React from "react";
import { CommonModal } from ".";

export default function PropertyDetail() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <section className="container mx-auto">
      <div className="bg-gray-100 flex flex-col gap-10 ">
        {/* Top Heading */}
        <div className="flex justify-center mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Top Heading</h1>
        </div>

        {/* Center Paragraph */}
        <div className="flex justify-center items-center">
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-md">
            This is a centered paragraph describing something important. It's positioned right in the middle of the screen for emphasis.
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="w-full px-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Grid Item 1 */}
            <div className="bg-white p-4 shadow rounded-md text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-0">Heading 1</h2>
              <p className="text-gray-600 mb-0">Description for the first grid item.</p>
            </div>

            {/* Grid Item 2 */}
            <div className="bg-white p-4 shadow rounded-md text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-0">Heading 2</h2>
              <p className="text-gray-600 mb-0">Description for the second grid item.</p>
            </div>

            {/* Grid Item 3 */}
            <div className="bg-white p-4 shadow rounded-md text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-0">Heading 3</h2>
              <p className="text-gray-600 mb-0">Description for the third grid item.</p>
            </div>

            {/* Grid Item 4 */}
            <div className="bg-white p-4 shadow rounded-md text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-0">Heading 4</h2>
              <p className="text-gray-600 mb-0">Description for the fourth grid item.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600" onClick={() => setIsModalOpen(true)}>
            Book Now
          </button>
        </div>
      </div>
      <CommonModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
