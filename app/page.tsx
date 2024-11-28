"use client";

import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <div className="p-6 flex items-center justify-center py-5 md:py-10">
        <div className="bg-blue-100 border-2 border-dotted border-blue-300 rounded-xl shadow-lg max-w-4xl p-8">
          <h1 className="text-red-600 font-bold text-center text-xl md:text-2xl uppercase mb-4">
            2-Day International Symposium
          </h1>
          <h2 className="text-red-800 font-bold text-center text-2xl md:text-3xl uppercase leading-tight mb-6">
            Sustainable Technologies - The Way Forward
          </h2>
          <p className="text-blue-700 text-center font-bold text-lg md:text-xl mb-6">
            and
            <br />
            61<sup>st</sup> Annual Convention 2024 of Indian Photobiology
            Society (IPS)
          </p>
          <div className="text-center text-lg md:text-xl font-semibold mb-6">
            <p className="text-gray-800">Organized by:</p>
            <p className="text-blue-700">
              Centre of Excellence in Renewable Energy (CoERE)
            </p>
            <p className="text-blue-700">and</p>
            <p className="text-blue-700">
              Basic Science and Humanities Department (BSH), IEM Newtown
              <br />
              University of Engineering and Management (UEM), Kolkata
            </p>
          </div>
          <div className="text-center text-lg md:text-xl font-semibold">
            <p className="text-gray-800">In Association With:</p>
            <p className="text-yellow-700">Indian Photobiology Society</p>
            <p className="text-yellow-700">and</p>
            <p className="text-yellow-700">
              Royal Society of Chemistry (RSC), UK
            </p>
          </div>
        </div>
      </div>

      <div className="relative p-6 flex items-center justify-center gap-10 py-5 md:py-10 z-30">
        <h1 className="bg-amber-800 rounded-full py-2 px-5 md:px-10 md:py-5 md:text-xl font-bold text-center">
          31st JAN - 1st FEB, 2025
        </h1>
        <button
          className="bg-amber-800 rounded-full py-2 px-5 md:px-10 md:py-5 md:text-xl font-bold text-center"
          onClick={() => (window.location.href = "/about")}
        >
          About Us
        </button>
      </div>
      
      <img
        src="/doodle.svg"
        alt="soodles"
        className="absolute top-0 left-0 z-0 h-screen object-cover w-full"
      />
    </main>
  );
}
