import React from "react";

export default function PriceTable() {
  const rows = [
    { type: "2BHK", priceSize: "1200 SQFT", price: "$150,000" },
    { type: "3BHK", priceSize: "1500 SQFT", price: "$200,000" },
    { type: "4BHK", priceSize: "2000 SQFT", price: "$250,000" },
    { type: "1BHK", priceSize: "800 SQFT", price: "$100,000" },
    { type: "Penthouse", priceSize: "3000 SQFT", price: "$500,000" },
    { type: "Studio", priceSize: "600 SQFT", price: "$80,000" },
    { type: "Villa", priceSize: "3500 SQFT", price: "$700,000" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Table Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Price Table</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="text-left px-6 py-4 font-medium">Type</th>
                <th className="text-left px-6 py-4 font-medium">Price Size</th>
                <th className="text-left px-6 py-4 font-medium">Price</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="px-6 py-4">{row.type}</td>
                  <td className="px-6 py-4">{row.priceSize}</td>
                  <td className="px-6 py-4">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
