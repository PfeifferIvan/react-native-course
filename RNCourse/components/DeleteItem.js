import { Svg, Path } from "react-native-svg";

function DeleteIconSVG(props) {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 24" fill="white">
      <Path d="M3 6h18v2H3V6zm2 3h14l-1.5 13.5a1 1 0 01-1 .5H8a1 1 0 01-1-.5L5 9zm5 2v8h2v-8H10zm4 0v8h2v-8h-2zM9 4h6v2H9V4z" />
    </Svg>
  );
}

export default DeleteIconSVG;
