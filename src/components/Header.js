import React from "react";

function Header({ title, backgroundColor }) {
  console.log(title);
  console.log(backgroundColor);
  const headerStyle = {
    backgroundColor: backgroundColor || "white",
  };

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-md z-10"
      style={headerStyle}
    >
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-indigo-700">
            {title}
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-indigo-700">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-indigo-700">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-700 hover:text-indigo-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-indigo-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
