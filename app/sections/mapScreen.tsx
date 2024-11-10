"use client";

import React from 'react';
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import MapComponent from '../googleMaps';


const MapScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800 hide-scrollbar">
      <div className="absolute -z-10 min-h-full w-full bg-gradient-to-r from-orange-100 to-red-400"></div>
      <div className="p-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-[56px] text-black">Relief Map</h1>
          {/* <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <p className="text-xl text-center">Map Integration Coming Soon</p>
            <div className = "z-10 flex">
            <MapComponent/>
            </div>
          </div> */}
          <div className = "w-[1000px] h-[600px] rounded-lg overflow-hidden border-[3px] border-green-500 shadow-lg">
            <MapComponent/>
          </div>

          {/* Navigation Section */}
          <div className="mt-8 flex justify-center ml-[104px] space-x-[40px]">
            <Link 
              href="/form" 
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>← Back to Form</span>
            </Link>
            <Link 
              href="/transaction" 
              className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>Proceed to Transaction</span>
              <MdArrowOutward className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapScreen;