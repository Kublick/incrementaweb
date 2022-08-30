import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
	return (
		<div className="">
			<p className="text-red-400 text-2xl">El tiempo de registro ya expiro</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
	return (
		<div className="flex gap-4 text-center">
			<DateTimeDisplay value={days} type={'Dias'} />
			<DateTimeDisplay value={hours} type={'Horas'} />
			<DateTimeDisplay value={minutes} type={'Mins'} />
			<DateTimeDisplay value={seconds} type={'Seg'} />
		</div>
	);
};

const CountdownTimer = ({ targetDate }: any) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return (
			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	}
};

export default CountdownTimer;
