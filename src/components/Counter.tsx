import Countdown, { zeroPad } from "react-countdown";

type Props = {
  date: Date | number;
};

const Counter = ({ date }: Props) => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    let timeDay = "D";
    let timeHour = "H";
    let timeMinutes = "M";
    let timeSeconds = "S";

    if (days < 2) {
      timeDay = "D";
    }

    if (hours < 2) {
      timeHour = "H";
    }

    return (
      <div className="flex gap-4 counter-num">
        <div className="flex flex-col items-center w-16 p-2 rounded-md lg:p-4">
          <p className="text-xl md:text-3xl">{zeroPad(days)}</p>
          <p>{timeDay}</p>
        </div>
        <div className="flex flex-col items-center w-16 p-2  rounded-md md:p-4">
          <p className="text-xl md:text-3xl">{zeroPad(hours)}</p>
          <p>{timeHour}</p>
        </div>
        <div className="flex flex-col items-center w-16 p-2  rounded-md md:p-4">
          <p className="text-xl md:text-3xl">{zeroPad(minutes)}</p>
          <p>{timeMinutes}</p>
        </div>

        <div className="flex flex-col items-center w-16 p-2   rounded-md md:p-4">
          <p className="text-xl md:text-3xl">{zeroPad(seconds)}</p>
          <p>{timeSeconds}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid ">
        <Countdown date={date} renderer={renderer} zeroPadTime={2} />
      </div>
    </>
  );
};

export default Counter;
