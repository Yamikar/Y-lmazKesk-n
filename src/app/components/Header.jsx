import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 ">
      {/* Sol taraftaki 4 öğe */}
      <nav className="w-2/5 flex justify-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
          <li className="cursor-pointer hover:text-gray-400">Linkedin</li>
        </ul>
      </nav>

      {/* Sağ taraftaki 3 öğe */}
      <nav className="w-2/5 flex justify-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:text-gray-400">Medium</li>
          <li className="cursor-pointer hover:text-gray-400">Resume</li>
          <li className="cursor-pointer hover:text-gray-400">GitHub</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
