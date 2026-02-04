import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


const API_BASE_URL = "http://172.20.10.7:8000/api";

const ROOM_MAPPING = {
  Standard: 1,
  Deluxe: 2,
  Suite: 3,
};

const ROOM_PRICES = {
  Standard: 25000,
  Deluxe: 40000,
  Suite: 65000,
};

function Booking() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "Standard",
    checkIn: "",
    checkOut: "",
  });

  const nights =
    formData.checkIn && formData.checkOut
      ? Math.max(
          (new Date(formData.checkOut) - new Date(formData.checkIn)) /
            (1000 * 60 * 60 * 24),
          1
        )
      : 0;

  const pricePerNight = ROOM_PRICES[formData.roomType];
  const totalPrice = nights * pricePerNight;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    // ⚠️ backend expects ROOM ID, not room name
    const roomIdMap = {
      Standard: 1,
      Deluxe: 2,
      Suite: 3,
    };

    const response = await api.post("/booking/", {
      room: roomIdMap[formData.roomType],
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      name: formData.name,
      email: formData.email,
    });

    const bookingFromBackend = response.data;

    navigate("/payment", {
      state: {
        booking: {
          ...formData,
          nights,
          price: totalPrice,
          bookingId: bookingFromBackend.id,
        },
      },
    });
  } catch (error) {
  console.error("BOOKING ERROR:", error.response?.data || error.message);
  alert(
    error.response?.data?.message ||
    "Booking failed. Check console for details."
  );
}

}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Book a Room</h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded text-sm">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="roomType"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>Standard</option>
          <option>Deluxe</option>
          <option>Suite</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Check-in</label>
            <input
              type="date"
              name="checkIn"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Check-out</label>
            <input
              type="date"
              name="checkOut"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
          </div>
        </div>

        {nights > 0 && (
          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><b>Nights:</b> {nights}</p>
            <p><b>Price per night:</b> ₦{pricePerNight.toLocaleString()}</p>
            <p className="font-semibold">
              Total: ₦{totalPrice.toLocaleString()}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-700 text-white py-3 rounded hover:bg-black transition disabled:opacity-50"
        >
          {loading ? "Creating Booking..." : "Continue to Payment"}
        </button>
      </form>
    </div>
  );
}

export default Booking;
