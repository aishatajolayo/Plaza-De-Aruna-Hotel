import { useState } from "react";
import RoomCard from "../components/RoomCard";


import room1 from "../assets/images/Rectangle-10.png";
import room2 from "../assets/images/Rectangle-10(1).png";
import room3 from "../assets/images/Rectangle-10(2).png";
import Navbar from "../components/NavBar.jsx";

import heroImg from "../assets/images/luxry-rooms.png";

const baseRooms = [
  {
    image: room1,
    title: "Deluxe Room",
    desc: "Comfortable room with modern facilities.",
    price: "₦45,000 / night",
  },
  {
    image: room2,
    title: "Executive Suite",
    desc: "Ideal for business travelers.",
    price: "₦65,000 / night",
  },
  {
    image: room3,
    title: "Presidential Suite",
    desc: "Luxury experience at its best.",
    price: "₦120,000 / night",
  },
];

const rooms = Array(3).fill(baseRooms).flat(); // 9 rooms total

function Rooms() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-2 sm:px-4">
          <div>
            <h1 className="items-center justify-center text-center text-white text-lg font-bold sm:text-2xl md:text-2xl lg:text-4xl lg:mb-5">
              Rooms & Suites
            </h1>
            <p className="text-white text-sm sm:text-xl md:text-2xl lg:text-sm leading-relaxed md:leading-relaxed lg:leading-loose max-w-3xl">
              The elegant luxury bedrooms in this gallery showcase custom interior <br />
              designs & decorating ideas. View pictures and find your <br />
              perfect luxury bedroom design.
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Rooms
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-5">
          {/* Hotel Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Plaza De' Aruna Hotel
            </h3>
            <p className="text-xs leading-relaxed">
              Plaza De' Aruna hotel offers comfort, luxury, and excellent hospitality.
              We are committed to making every stay memorable and relaxing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/rooms" className="hover:text-white">Rooms</a></li>
              <li><a href="/service" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
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

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 OYO, Oyo state, Nigeria</li>
              <li>📞 +234 810 738 6011</li>
              <li>✉ info@plazadearuna.com</li>
            </ul>
          </div>

          {/* Newsletter */}
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

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
          © 2026 Plaza De' Aruna Hotel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Rooms;
