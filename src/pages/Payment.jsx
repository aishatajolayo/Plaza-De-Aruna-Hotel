import { useLocation, Navigate } from "react-router-dom";
import api from "../services/api";

function Payment() {
  const location = useLocation();
  const booking = location.state?.booking;

  // If user lands here directly, redirect back
  if (!booking) return <Navigate to="/booking" />;

  async function handlePayment() {
    try {
      const res = await api.post("/payments/initialize/", {
        booking_id: booking.bookingId, // backend should send this
      });

      // Redirect to Paystack checkout
      window.location.href = res.data.authorization_url;
    } catch (error) {
      console.error(error);
      alert("Payment initialization failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 space-y-6">

        <h2 className="text-2xl font-bold text-center">Confirm Payment</h2>

        {/* Booking Summary */}
        <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
          <p><b>Name:</b> {booking.name}</p>
          <p><b>Email:</b> {booking.email}</p>
          <p><b>Room:</b> {booking.roomType}</p>
          <p><b>Check-in:</b> {booking.checkIn}</p>
          <p><b>Check-out:</b> {booking.checkOut}</p>
          <p><b>Nights:</b> {booking.nights}</p>

          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>₦{booking.price.toLocaleString()}</span>
          </div>
        </div>

        {/* Paystack Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-yellow-700 text-white py-3 rounded hover:bg-black transition"
        >
          Pay ₦{booking.price.toLocaleString()} with Paystack
        </button>

        <p className="text-xs text-center text-gray-500">
          You will be redirected to Paystack to complete your payment securely.
        </p>

      </div>
    </div>
  );
}

export default Payment;
