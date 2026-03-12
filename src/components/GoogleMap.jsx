const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Hotel Location"
        src="https://www.google.com/maps?q=7.8526,3.9312&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;