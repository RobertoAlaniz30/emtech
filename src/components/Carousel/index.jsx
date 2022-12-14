import { useEffect, useState } from "react";
import "./styles.scss";

export default function Carousel({ images }) {
  console.log(images);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState([
    images[0],
    images[1],
    images[2],
  ]);
  const [loaded, setLoaded] = useState(false);


  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const imagesLength = images.length - 1;
      const condition = selectedIndex < imagesLength;

      const nextIndex = next
        ? condition
          ? selectedIndex + 3
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage([
        images[nextIndex],
        images[nextIndex + 1],
        images[nextIndex + 2],
      ]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };
  const validateCenterItem = (index) => {
    const indexValue = (index + 1) % 2;
    const className = indexValue === 0 ? "centerImage" : "";
    return className;
  };
  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  // if (images.length === 0) return <p>nada</p>;
  return (
    <>
      <div className="carousel">
        {selectedImage.map((item, index) => {
          if (!item) return;
          return (
            <img
              src={item}
              alt="Gentleman"
              className={`${validateCenterItem(index)} ${loaded ? "loaded" : ""}`}
              onLoad={() => setLoaded(true)}
            />
          );
        })}
      </div>
      <button onClick={next} className="nextButton">Ver más</button>
    </>
  );
}
