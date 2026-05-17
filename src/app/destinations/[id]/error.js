"use client";

import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-black px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-red-500/10 border border-red-500/30 shadow-lg shadow-red-500/20 animate-pulse">
            <FaExclamationTriangle className="text-red-400 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-white">
          Something Went Wrong
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mt-5 leading-relaxed max-w-lg mx-auto">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        {/* Optional Error Message */}
        {error?.message && (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-red-300 text-sm backdrop-blur-md">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/30 hover:scale-105"
          >
            <FaRedo />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 border border-gray-700 hover:border-orange-400 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <FaHome />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
