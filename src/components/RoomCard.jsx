import { Link } from "react-router-dom";

function RoomCard({
  id,
  room_number,
  room_type_display,
  description,
  price,
  status,
  status_display,
  image,
}) {
  return (
    <div className="overflow-hidden transition duration-500 bg-white shadow-lg rounded-2xl group hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={room_type_display}
          className="object-cover w-full transition duration-700 transform h-60 group-hover:scale-110"
        />

        {status !== "available" && (
          <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded top-3 left-3">
            {status_display?.toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {room_type_display}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-yellow-900">
            ₦{parseFloat(price)?.toLocaleString()} / night
          </p>

          {status === "available" ? (
            <Link
              to="/booking"
              state={{
                roomId: id,
                roomNumber: room_number,
                roomTypeDisplay: room_type_display,
                price: parseFloat(price),
                image: image,
              }}
              className="px-5 py-2 text-sm font-semibold text-white transition duration-300 bg-yellow-900 rounded-lg hover:bg-yellow-800"
            >
              Book Now
            </Link>
          ) : (
            <button
              className="px-5 py-2 text-sm font-semibold text-white bg-gray-400 rounded-lg cursor-not-allowed"
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
