import React from "react";

const Page = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto min-h-screen">
      {/* Background Image */}
      <div className="relative z-30 bg-gradient-to-t from-gray-900/60 to-transparent mt-5 md:mt-10 p-5 rounded-xl">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/clg.jpg" // Replace with your image path
            alt="University of Engineering & Management, Kolkata"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className=" bg-green-200 bg-opacity-90 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 text-center">VENUE</h3>
          <h2 className="text-xl font-bold text-gray-900 text-center mt-1">
            UNIVERSITY OF ENGINEERING & MANAGEMENT, KOLKATA
          </h2>
          <p className="text-sm text-gray-700 text-center mt-2">
            NEW TOWN, UNIVERSITY AREA, PLOT NO. III,B/5, NEW TOWN RD, ACTION
            AREA III, NEWTOWN, NEW TOWN, WEST BENGAL 700160
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
