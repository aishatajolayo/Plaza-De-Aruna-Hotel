function RoomCard({ image, title, desc, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
        <p className="font-bold mt-2">{price}</p>

        <a
          href="/booking"
          className="mt-4 inline-block bg-yellow-900 text-white text-center w-40 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default RoomCard;
