// src/components/TestimonialCard.jsx
function TestimonialCard({ image, name, location, message }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
      />

      {/* Stars */}
      <div className="flex justify-center mb-3 text-yellow-400">★★★★★</div>

      <p className="text-gray-600 text-xs mb-4">{message}</p>

      <h4 className="font-semibold">{name}</h4>
      <span className="text-sm text-gray-500">{location}</span>
    </div>
  );
}

export default TestimonialCard;
