const DateTimeDisplay = ({ value, type, textColor }: any) => {
  return (
    <div className={`text-${textColor}`}>
      <p className="font-semibold text-xl md:text-3xl w-12 ">{value}</p>
      <span className="text-sm">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
