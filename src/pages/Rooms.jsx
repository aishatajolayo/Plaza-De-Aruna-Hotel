import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import heroImg from "../assets/images/luxry-rooms.png";

import { fetchRooms } from "../services/api";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        setRooms(data || []);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[80vh]">
        <img
          src={heroImg}
          alt="Luxury Rooms"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Rooms & Suites
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Experience luxury, comfort, and elegance in every stay. Designed
              for relaxation and premium hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="py-20 bg-gray-100">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
            Our Available Rooms
          </h2>

          {loading ? (
            <div className="text-center text-gray-600">Loading rooms...</div>
          ) : rooms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="mb-2 text-2xl font-semibold text-blue-900">
                No Rooms Available
              </p>
              <p className="text-gray-500">
                Please check back later or contact us for more information.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard key={room.id} {...room} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Rooms;
