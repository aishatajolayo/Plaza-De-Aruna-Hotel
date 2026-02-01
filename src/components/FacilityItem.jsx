function FacilityItem({ icon, title }) {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src={icon} alt={title} className="w-10 h-10" />
      <h4 className="font-semibold mt-4 text-sm sm:text-base">{title}</h4>
    </div>
  );
}

export default FacilityItem;
