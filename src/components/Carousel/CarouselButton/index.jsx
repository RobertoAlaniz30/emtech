import "./styles.scss";

const CarouselButton = ({ content, handleImage }) => {
  return (
    <button onClick={handleImage} className="carouselButton ">
      {content}
    </button>
  );
};

export default CarouselButton;
