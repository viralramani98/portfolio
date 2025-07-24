import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menus } from "../../App";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <header className="bg-white shadow-md py-4 px-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <a className="text-xl font-bold text-blue-600" href="/">
            Viral
          </a>

          {/* Hamburger Icon - Mobile Only */}
          <div
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {Menus.map((ele) => (
              <NavLink
                key={ele.title}
                to={ele.path}
                className={({ isActive }) =>
                  `font-medium transition pb-1 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {ele.title}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 px-6">
            <div className="flex flex-col gap-4">
              {Menus.map((ele) => (
                <NavLink
                  key={ele.title}
                  to={ele.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition pb-1 ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {ele.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
