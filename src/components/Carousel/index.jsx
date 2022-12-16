import useCarousel from "../../hooks/useCarousel";
import "./styles.scss";
import CarouselImage from "./CarouselImg";
import Button from "../Button";
import { Fragment } from "react";

export default function Carousel({ images }) {
  const { selectedImage, validateCenterItem, loaded, handleImageLoaded, next, nameCenterImage } =
    useCarousel(images);

  return (
    <div className="carousel">
      <div className="carousel__img-container">
        {selectedImage.map((item, index) => {
          if (!item) return;
          return (
            <Fragment key={index}>
              <CarouselImage
                src={item}
                index={index}
                loaded={loaded}
                validateCenterItem={validateCenterItem}
                handleImageLoaded={handleImageLoaded}
              />
            </Fragment>
          );
        })}
      </div>
      <Button onClIick={next}>Ver más</Button>
      <p>{nameCenterImage}</p>
    </div>
  );
}
