import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { createPayment } from "../services/api"; // Updated to match your api.js function

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
      // You can add more fields here if your backend needs them (e.g., email: booking.email)
    };

    const result = await createPayment(paymentData);

    if (result && result.authorization_url) {
      // Success: Redirect to Paystack checkout
      window.location.href = result.authorization_url;
    } else {
      // Error handling
      alert("Payment initialization failed. Please try again or contact support.");
      setLoading(false); // Only set loading to false if we stay on the page
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 space-y-6">
        
        <h2 className="text-2xl font-bold text-center text-blue-900">Confirm Payment</h2>

        {/* Booking Summary */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm border border-gray-200">
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Name:</span> 
            <span className="font-semibold">{booking.name}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email:</span> 
            <span className="font-semibold">{booking.email}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Room:</span> 
            <span className="font-semibold">{booking.roomType}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Check-in:</span> 
            <span className="font-semibold">{booking.checkIn}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Check-out:</span> 
            <span className="font-semibold">{booking.checkOut}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Duration:</span> 
            <span className="font-semibold">{booking.nights} Night(s)</span>
          </p>

          <div className="pt-3 flex justify-between text-lg font-bold text-blue-900">
            <span>Total Amount</span>
            <span>₦{booking.price?.toLocaleString()}</span>
          </div>
        </div>

        {/* Paystack Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-yellow-700 text-white py-4 rounded-lg font-semibold hover:bg-black transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : `Pay ₦${booking.price?.toLocaleString()} with Paystack`}
        </button>

        <p className="text-xs text-center text-gray-500 italic">
          🔒 Secure Payment: You will be redirected to Paystack to complete your transaction.
        </p>

      </div>
    </div>
  );
}

export default Payment;