import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ROOM_PRICES = {
  Standard: 25000,
  Deluxe: 40000,
  Suite: 65000,
};

function Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "Standard",
    checkIn: "",
    checkOut: "",
  });

  // Calculate number of nights
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

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/payment", {
      state: {
        booking: {
          ...formData,
          nights,
          price: totalPrice,
        },
      },
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Book a Room</h2>

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
          <option>Deluxe</option>
          <option>Executive</option>
          <option>Presidential</option>
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
          className="w-full bg-yellow-700 text-white py-3 rounded hover:bg-black transition"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}

export default Booking;
