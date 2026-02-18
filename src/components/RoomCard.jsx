import { Link } from "react-router-dom";

function RoomCard({ image, title, desc, price, status }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition duration-500 hover:shadow-2xl">
      
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transform group-hover:scale-110 transition duration-700"
        />

        {status !== "available" && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {status?.toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {desc}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-yellow-900">
            ₦{price?.toLocaleString()} / night
          </p>

          {status === "available" ? (
            <Link
              to="/booking"
              state={{ room: { title, price } }}
              className="bg-yellow-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-800 transition duration-300"
            >
              Book Now
            </Link>
          ) : (
            <button
              className="bg-gray-400 text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-not-allowed"
              disabled
            >
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
