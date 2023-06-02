import React from "react";

export default function () {
  return (
    <div className="flex justify-center mb-5 flex-wrap">
      <input
        className="w-[300px] p-4 text-center mb-5 outline-none rounded-lg m-1"
        type="text"
        placeholder="Username"
      ></input>
      <input
        className="w-[300px] p-4 text-center	outline-none rounded-lg m-1"
        type="password"
        placeholder="Password"
      ></input>
    </div>
  );
}
