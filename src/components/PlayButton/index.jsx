import { BsFillPlayFill } from "react-icons/bs";
import "./styles.scss"

function PlayButton() {
  return (
    <button className="playButton">
      <BsFillPlayFill className="playButton__icon"/>
    </button>
  );
}

export default PlayButton;
