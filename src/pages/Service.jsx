import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import heroImg from "../assets/images/take-a-tour.png";
import gymImg from "../assets/images/rectangle-22.png";
import restaurantImg from "../assets/images/rectangle-22(1).png";
import roomImg from "../assets/images/luxry-rooms.png";

const services = [
  {
    img: gymImg,
    title: "Fitness & Wellness",
    desc: "Experience our state-of-the-art gym facilities and keep your body and mind healthy during your stay.",
  },
  {
    img: restaurantImg,
    title: "Restaurant",
    desc: "Enjoy delicious meals prepared by top chefs in a relaxing environment.",
  },
  {
    img: roomImg,
    title: "Luxurious Rooms",
    desc: "Relax in comfort with our modern and well-furnished rooms.",
  },
];

function Services() {
  return (
    <>
    

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[90vh]">
        <img
          src={heroImg}
          alt="Take a Tour"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600">
          Take A Tour
        </h2>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className="relative min-h-[70vh] flex items-center px-4 sm:px-8 md:px-16 lg:mx-10 mb-16"
        >
          <img
            src={service.img}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative bg-white/80 p-6 sm:p-10 rounded-lg max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              {service.title}
            </h3>
            <p className="text-sm md:text-lg">
              {service.desc}
            </p>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}

export default Services;
