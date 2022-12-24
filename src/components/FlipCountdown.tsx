import FlipCountdown from "@rumess/react-flip-countdown";
import useWindowDimensions from "./hooks/useWindowDimensions";

export const FlipCD = ({ date = "February 02 2023 00:00" }) => {
  const { width } = useWindowDimensions();

  let textSize = "medium";

  if (width! < 530) {
    textSize = "small";
  }

  return (
    <FlipCountdown
      titlePosition="bottom"
      size={textSize}
      hideYear
      hideMonth
      endAtZero
      dayTitle="Dias"
      hourTitle="Hrs"
      minuteTitle="Min"
      secondTitle="Seg"
      endAt={date} // Date/Time
    />
  );
};
