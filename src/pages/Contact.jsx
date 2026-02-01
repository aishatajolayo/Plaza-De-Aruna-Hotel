import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import GoogleMap from "../components/GoogleMap";
import heroBg from "../assets/images/rectangle-5.png";


// ✅ Define navLinks INSIDE this file
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Services", href: "/service" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center">
       <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto text-sm md:text-lg">
            We’re here to help. Reach out for reservations, inquiries, or feedback.
          </p>
        </motion.div>
      </section>

     {/* CONTENT */}
<section className="py-20">
  <div className="container mx-auto px-4">
    
    {/* WHITE CARD CONTAINER */}
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-14">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Send Us a Message
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* FORM */}
        <div className="relative">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* SUCCESS OVERLAY */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-xl flex flex-col items-center justify-center text-center p-8"
              >
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold">
                  Message Sent Successfully
                </h3>
                <p className="text-gray-600">
                  We’ll get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MAP */}
        <GoogleMap />

      </div>
    </div>
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
    </>
  );
}

export default Contact;
