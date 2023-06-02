import React from "react";

export default function Buttons() {
  return (
    <div className=" flex justify-center flex-wrap	">
      <button className="w-[300px] p-4 text-white rounded-lg m-1 mb-5 bg-gradient-to-r from-pink-700 via-pink-600 to-indigo-600">
        Login
      </button>
      <button className="w-[300px] p-4 text-white rounded-lg m-1 mb-5 bg-gradient-to-r from-pink-700 via-pink-600 to-indigo-600">
        Signup
      </button>
    </div>
  );
}
