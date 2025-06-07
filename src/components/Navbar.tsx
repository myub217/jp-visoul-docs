import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-900">JP Visual & Docs</a>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#services" className="hover:text-blue-600">บริการ</a></li>
          <li><a href="#why" className="hover:text-blue-600">ทำไมถึงเลือกเรา</a></li>
          <li><a href="#contact" className="hover:text-blue-600">ติดต่อ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;