import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessage } from "../services/api"; 
import GoogleMap from "../components/GoogleMap";
import heroBg from "../assets/images/rectangle-5.png";
import Footer from "../components/Footer";

function Contact() {
  // 1. Initialize State 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content:""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 2. Handle Input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle Form Submission 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.content) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    
    const result = await sendMessage(formData);

    if (result) {
      setSuccess(true);
      // Reset form fields
      setFormData({ name: "", email: "", message: "" });
      // Hide success message after 4 seconds
      setTimeout(() => setSuccess(false), 4000);
    } else {
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
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
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-14">
            
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Send Us a Message
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* CONTACT FORM */}
              <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name" // Matches key in formData
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email" // Matches key in formData
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="content" // Matches key in formData
                      rows="5"
                      value={formData.content}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-yellow-600 transition disabled:bg-gray-400"
                  >
                    {loading ? "Sending..." : "Send Message"}
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

              {/* MAP COMPONENT */}
              <GoogleMap />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;