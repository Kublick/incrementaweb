import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./flip.css";

type Props = {
  date?: string;
  color: boolean;
};
export const ChinneseCountDown = ({
  date = "2023-01-25 16:40",
  color,
}: Props) => {
  return (
    <div>
      <FlipClockCountdown
        className={color ? "flip-clock" : "flip-clock-black"}
        to={new Date(date)}
        digitBlockStyle={{ fontSize: 24, fontFamily: "Coolvetica" }}
        showLabels={false}
        showSeparators={false}
      />
    </div>
  );
};
