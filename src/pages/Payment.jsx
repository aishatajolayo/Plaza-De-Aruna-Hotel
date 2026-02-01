import { useLocation, Navigate } from "react-router-dom";

import visa from "../assets/images/visa_payment_method_card_icon_142729.svg";
import mastercard from "../assets/images/mastercard_payment_method_card_icon_142734.svg";
import verve from "../assets/images/verve_payment_method_icon_142747.svg";
import paypal from "../assets/images/paypal_payment_method_card_icon_142733.svg";

function Payment() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) return <Navigate to="/booking" />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

        {/* Booking Summary */}
        <div className="bg-gray-50 p-6 rounded space-y-2">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

          <p><b>Name:</b> {booking.name}</p>
          <p><b>Email:</b> {booking.email}</p>
          <p><b>Room:</b> {booking.roomType}</p>
          <p><b>Check-in:</b> {booking.checkIn}</p>
          <p><b>Check-out:</b> {booking.checkOut}</p>
          <p><b>Nights:</b> {booking.nights}</p>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₦{booking.price.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <img src={visa} className="h-7 object-contain" />
            <img src={mastercard} className="h-7 object-contain" />
            <img src={verve} className="h-7 object-contain" />
            <img src={paypal} className="h-7 object-contain" />
          </div>

          <h2 className="text-xl font-semibold">Payment Details</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-3 rounded"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-3 rounded"
              />
              <input
                type="password"
                placeholder="CVV"
                className="border p-3 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-700 text-white py-3 rounded hover:bg-black transition"
            >
              Pay ₦{booking.price.toLocaleString()}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Payment;
