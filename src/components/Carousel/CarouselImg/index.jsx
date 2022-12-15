import "./styles.scss";

const CarouselImage = ({ src, handleImageLoaded, validateCenterItem, loaded, index }) => {
  return (
    <img
      src={src}
      alt="character"
      className={`carouselImg ${validateCenterItem(index)} ${loaded ? "loaded" : ""}`}
      onLoad={handleImageLoaded}
    />
  );
};

export default CarouselImage;
