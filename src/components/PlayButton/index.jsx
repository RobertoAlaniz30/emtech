import { BsFillPlayFill } from "react-icons/bs";
import "./styles.scss";

function PlayButton({ onClick }) {
  return (
    <button className="playButton" onClick={onClick}>
      <BsFillPlayFill className="playButton__icon" />
    </button>
  );
}

export default PlayButton;
