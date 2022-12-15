import useCarousel from "../../hooks/useCarousel";
import "./styles.scss";
import CarouselImage from "./CarouselImg";
import CarouselButton from "./CarouselButton";

export default function Carousel({ images }) {
  const { selectedImage, validateCenterItem, loaded, handleImageLoaded, next, nameCenterImage } =
    useCarousel(images);

  return (
    <div className="carousel">
      <div className="carousel__img-container">
        {selectedImage.map((item, index) => {
          if (!item) return;
          return (
            <CarouselImage
              src={item}
              index={index}
              loaded={loaded}
              validateCenterItem={validateCenterItem}
              handleImageLoaded={handleImageLoaded}
            />
          );
        })}
      </div>
      <CarouselButton content={"Ver mas"} handleImage={next} />
      <p>{nameCenterImage}</p>
    </div>
  );
}
