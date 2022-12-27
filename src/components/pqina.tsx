import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "../utils/flip.css";
export const ChinneseCountDown = () => {
  return (
    <FlipClockCountdown
      className="flip-clock"
      to={new Date("2023-01-25 16:40")}
      digitBlockStyle={{ fontSize: 36, fontFamily: "Coolvetica" }}
      showLabels={false}
      showSeparators={true}
    />
  );
};
