"use client";

import React from 'react';
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ConfirmScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white antialiased selection:bg-rose-300 selection:text-rose-800 hide-scrollbar">
      <div className="absolute -z-10 min-h-full w-full bg-gradient-to-r from-orange-100 to-red-400"></div>
      <div className="p-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8">Confirm Relief Request</h1>
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <p className="text-xl text-center">Please review your submission details before final confirmation</p>
            {/* Add confirmation details here */}
          </div>

          {/* Navigation Section */}
          <div className="mt-8 flex justify-between w-full max-w-4xl">
            <Link 
              href="/transaction" 
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>← Back to Transaction</span>
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 text-white"
            >
              <span>Complete & Return Home</span>
              <MdArrowOutward className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmScreen;