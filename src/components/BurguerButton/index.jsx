import { RxHamburgerMenu } from "react-icons/rx";

function BurguerButton({ handleOpen, clicked }) {
  return (
    <div
      onClick={handleOpen}
      className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
    >
      <RxHamburgerMenu />
    </div>
  );
}

export default BurguerButton;
