import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 ">
      {/* Sol taraftaki 4 öğe */}
      <nav className="w-2/5 flex justify-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Services</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </nav>

      {/* Sağ taraftaki 3 öğe */}
      <nav className="w-2/5 flex justify-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:text-gray-400">Blog</li>
          <li className="cursor-pointer hover:text-gray-400">Resume</li>
          <li className="cursor-pointer hover:text-gray-400">Works</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
