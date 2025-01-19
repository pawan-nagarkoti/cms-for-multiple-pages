import React from "react";

export default function CustomHeading({ text = "" }) {
  return <h4 className="mb-5 text-blue-500 font-bold">{text}</h4>;
}
