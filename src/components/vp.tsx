import ReactPlayer from "react-player";

type Props = {
  width: number;
  height: number;
  url: string;
};

const VP = ({ width, height, url }: Props) => {
  return <ReactPlayer url={url} width={width} height={height} />;
};

export default VP;
