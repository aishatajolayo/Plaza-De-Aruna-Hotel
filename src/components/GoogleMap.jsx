const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Hotel Location"
        src="https://www.google.com/maps?q=Plazade'Aruna%20Hotel%Oyo&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
