import { useState } from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative px-2 py-1 font-medium transition-all duration-300
     ${
       isActive
         ? "text-yellow-600"
         : "text-gray-800 hover:text-yellow-600"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-yellow-600 after:transition-all after:duration-300
     ${
       isActive
         ? "after:w-full"
         : "after:w-0 hover:after:w-full"
     }`;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="text-xl md:text-2xl font-bold text-blue-900">
          Plaza De' Aruna
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/rooms" className={linkClasses}>Rooms</NavLink></li>
          <li><NavLink to="/service" className={linkClasses}>Services</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
        </ul>

        {/* BOOK NOW BUTTON */}
        <a
          href="/booking"
          className="mt-4 inline-block bg-yellow-900 text-white text-center w-40 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
        >
          Book Now
        </a>
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-blue-900"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {["/", "/rooms", "/service", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Rooms", "Services", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={linkClasses}
              >
                {names[i]}
              </NavLink>
            );
          })}

          <NavLink
            to="/bookings"
            onClick={() => setOpen(false)}
            className="mt-4 bg-blue-900 text-white text-center py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
