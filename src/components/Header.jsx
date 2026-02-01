import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Plaza De&apos; Aruna
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/rooms" className="hover:text-accent">Rooms</Link></li>
          <li><Link to="/service" className="hover:text-accent">Services</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li>
            <Link
              to="/contact"
              className="text-yellow-800 font-bold hover:text-blue-900"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="/bookings"
          className="hidden md:inline-block py-2 px-6 rounded bg-blue-900 text-white hover:text-yellow-300"
        >
          Book now
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary text-3xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/rooms" className="block px-4 py-2 hover:bg-gray-100">Rooms</Link>
          <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
