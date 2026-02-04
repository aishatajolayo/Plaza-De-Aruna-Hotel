import { CheckCircle } from "lucide-react";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow text-center space-y-4">
        <CheckCircle className="mx-auto text-green-600" size={80} />
        <h2 className="text-2xl font-bold">Payment Successful</h2>
        <p>Your booking has been confirmed 🎉</p>
      </div>
    </div>
  );
}

export default Success;
