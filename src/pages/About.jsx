import { useState } from "react";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer";


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
      <Footer />
    </div>
  );
}

export default About;
