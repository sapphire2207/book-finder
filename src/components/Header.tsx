import React from "react";
import { Book } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Logo Icon */}
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
            <Book className="h-7 w-7 text-white" />
          </div>

          {/* Title & Tagline */}
          <div className="ml-3">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Book Finder
            </h1>
            <p className="text-sm text-blue-100">
              Discover your next great read
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
