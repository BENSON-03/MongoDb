import React from "react";

export default function Input({ type, name, id, placerholder, defaultValue }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placerholder}
      defaultValue={defaultValue}
      className="border border-gray-500 rounded-2xl py-2 placeholder:text-orange-500"
    />
  );
}
