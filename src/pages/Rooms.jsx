import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

import room1 from "../assets/images/Rectangle-10.png";
import room2 from "../assets/images/Rectangle-10(1).png";
import room3 from "../assets/images/Rectangle-10(2).png";
import heroImg from "../assets/images/luxry-rooms.png";

import { fetchRooms } from "../services/api";


function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms(); // fetch from backend
        if (data && data.length > 0) {
          setRooms(data);
        } else {
          // fallback mock data
          setRooms([
            {
              id: 1,
              image: room1,
              title: "Deluxe Room",
              desc: "Comfortable room with modern facilities.",
              price: 45000,
              status: "available",
            },
            {
              id: 2,
              image: room2,
              title: "Executive Suite",
              desc: "Ideal for business travelers.",
              price: 65000,
              status: "booked",
            },
            {
              id: 3,
              image: room3,
              title: "Presidential Suite",
              desc: "Luxury experience at its best.",
              price: 120000,
              status: "available",
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        // fallback mock data if API fails
        setRooms([
          {
            id: 1,
            image: room1,
            title: "Deluxe Room",
            desc: "Comfortable room with modern facilities.",
            price: 45000,
            status: "available",
          },
          {
            id: 2,
            image: room2,
            title: "Executive Suite",
            desc: "Ideal for business travelers.",
            price: 65000,
            status: "booked",
          },
          {
            id: 3,
            image: room3,
            title: "Presidential Suite",
            desc: "Luxury experience at its best.",
            price: 120000,
            status: "available",
          },
        ]);
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
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Rooms & Suites
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Experience luxury, comfort, and elegance in every stay.
              Designed for relaxation and premium hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
            Our Available Rooms
          </h2>

          {loading ? (
            <div className="text-center text-gray-600">Loading rooms...</div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard key={room.id} {...room} />
              ))}
            </div>
          )}
          <br />
          <br />
          <br />
           {loading ? (
            <div className="text-center text-gray-600">Loading rooms...</div>
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
