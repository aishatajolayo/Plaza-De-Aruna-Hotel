import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { createPayment } from "../services/api";

function Payment() {
  const location = useLocation();
  const booking = location.state?.booking;

  // State for loading (matching Footer/Contact format)
  const [loading, setLoading] = useState(false);

  // If user lands here directly without booking data, redirect back
  if (!booking) return <Navigate to="/booking" />;

  const handlePayment = async () => {
    setLoading(true);

    // Prepare data for the API
    const paymentData = {
      booking_id: booking.bookingId,
    };

    const result = await createPayment(paymentData);

    if (result && result.authorization_url) {
      // Success: Redirect to Paystack checkout
      window.location.href = result.authorization_url;
    } else {
      // Error handling
      alert(
        "Payment initialization failed. Please try again or contact support.",
      );
      setLoading(false); // set loading to false if we stay on the page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="w-full max-w-3xl p-6 space-y-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Confirm Payment
        </h2>

        {/* Booking Summary */}
        <div className="p-6 space-y-3 text-sm border border-gray-200 rounded-lg bg-gray-50">
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Name:</span>
            <span className="font-semibold">{booking.name}</span>
          </p>
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Email:</span>
            <span className="font-semibold">{booking.email}</span>
          </p>
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Room:</span>
            <span className="font-semibold">{booking.roomType}</span>
          </p>
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Check-in:</span>
            <span className="font-semibold">{booking.checkIn}</span>
          </p>
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Check-out:</span>
            <span className="font-semibold">{booking.checkOut}</span>
          </p>
          <p className="flex justify-between pb-2 border-b">
            <span className="text-gray-500">Duration:</span>
            <span className="font-semibold">{booking.nights} Night(s)</span>
          </p>

          <div className="flex justify-between pt-3 text-lg font-bold text-blue-900">
            <span>Total Amount</span>
            <span>₦{booking.price?.toLocaleString()}</span>
          </div>
        </div>

        {/* Paystack Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full py-4 font-semibold text-white transition bg-yellow-700 rounded-lg hover:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading
            ? "Processing..."
            : `Pay ₦${booking.price?.toLocaleString()} with Paystack`}
        </button>

        <p className="text-xs italic text-center text-gray-500">
          🔒 Secure Payment: You will be redirected to Paystack to complete your
          transaction.
        </p>
      </div>
    </div>
  );
}

export default Payment;
