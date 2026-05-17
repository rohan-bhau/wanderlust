'use client'

import { FiHome } from "react-icons/fi";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 border border-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        
        {/* 404 Text */}
        <h1 className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-none drop-shadow-lg">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-lg mx-auto leading-relaxed">
          The page you are looking for doesn’t exist or may have been moved.
          Don’t worry, you can head back to the homepage or explore more.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          
          <Link
            href="/"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105"
          >
            <FiHome size={20} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-gray-700 hover:border-purple-400 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <FaArrowLeft  size={20} />
            Go Back
          </button>
        </div>

        {/* Search Hint */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500">
          <FaSearch  size={18} />
          <span>Try searching for something else</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;