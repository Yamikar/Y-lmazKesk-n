import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-100 shadow-lg">
      {/* Sol Tarafta Başlık Mobilde Gizli */}

      {/* Sağ Tarafta Linkler */}
      <nav className="flex space-x-6 text-gray-700 w-full justify-end">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a href="/resume" className="cursor-pointer hover:text-blue-400">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
