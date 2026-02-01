import { useState } from "react";
import Navbar from "../components/NavBar.jsx";

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      
      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>

          <p className="mb-4">
            Plaza De' Aruna Hotel is a modern luxury hotel dedicated to providing
            exceptional comfort, world-class service, and a memorable stay for every guest.
          </p>

          <p className="mb-4">
            Located in a serene environment, our hotel combines elegance, hospitality,
            and convenience for business travelers, families, and tourists.
          </p>

          <p>
            Our mission is to create a home-away-from-home experience with
            outstanding customer satisfaction.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-5">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Plaza De' Aruna Hotel
            </h3>
            <p className="text-xs leading-relaxed">
              Plaza De' Aruna Hotel offers comfort, luxury, and excellent hospitality.
              We are committed to making every stay memorable and relaxing.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Luxury Rooms</li>
              <li>Restaurant & Bar</li>
              <li>Free Wi-Fi</li>
              <li>24/7 Front Desk</li>
              <li>Airport Pickup</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 OYO, Oyo state, Nigeria</li>
              <li>📞 +234 810 738 6011</li>
              <li>✉ info@plazade'aruna.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive latest offers & updates:</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded text-gray-800"
              />
              <button
                type="submit"
                className="bg-yellow-900 text-white px-4 py-2 rounded hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
          © 2026 Plaza De' Aruna Hotel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;
