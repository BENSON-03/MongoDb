import React, { Children } from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-[18px] font-medium">
      {children}
    </label>
  );
};

export default Label;
