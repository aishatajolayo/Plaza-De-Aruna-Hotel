function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-5">

        {/* Hotel Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Plaza De&apos; Aruna
          </h3>
          <p className="text-xs leading-relaxed">
            Hotel De Aruna Plaza offers comfort, luxury, and excellent hospitality.
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
            <li>Restaurant &amp; Bar</li>
            <li>Free Wi-Fi</li>
            <li>24/7 Front Desk</li>
            <li>Airport Pickup</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 OYO, Oyo State, Nigeria</li>
            <li>📞 +234 810 738 6011</li>
            <li>✉ info@plazadearuna.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to receive latest offers &amp; updates:
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded text-gray-800"
            />
            <button
              type="submit"
              className="bg-accent text-black px-4 py-2 rounded hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © 2026 Plaza De&apos; Aruna Hotel. All rights reserved.
        Built and maintained by Aishah Ajolayo❤️
      </div>
    </footer>
  );
}

export default Footer;
