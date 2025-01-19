import React, { forwardRef } from "react";

const CustomButton = forwardRef(({ text = "", btnType = "button", ...props }, ref) => {
  return (
    <>
      <button
        type={btnType}
        ref={ref}
        {...props}
        className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
      >
        {text}
      </button>
    </>
  );
});

export default CustomButton;
