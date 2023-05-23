import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto mt-[150px] space-y-4">
        <div className="custom-loader"></div>
        <p className="text-black bg-gray-200 px-3 py-2 text-lg font-semibold">Loading....</p>
      </div>
    </>
  );
};

export default Spinner;
