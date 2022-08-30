const DateTimeDisplay = ({ value, type }: any) => {
	return (
		<div>
			<p className="font-semibold text-xl md:text-3xl">{value}</p>
			<span className="text-sm">{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
