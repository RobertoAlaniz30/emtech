import { useEffect, useState } from "react";
export default function useCarousel(images) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState([
    images[0].image,
    images[1].image,
    images[2].image
  ]);
  const [loaded, setLoaded] = useState(false);
  const [nameCenterImage, setNameCenterImage] = useState(null);

  const selectNewImage = (images, next = true) => {
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
        images[nextIndex]?.image,
        images[nextIndex + 1]?.image,
        images[nextIndex + 2]?.image
      ]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const validateCenterItem = (index) => {
    const indexValue = (index + 1) % 2;
    if (!(indexValue === 0)) return;
    setNameCenterImage(images[selectedIndex + 1].name);
    const className = "centerImage";
    return className;
  };

  const previous = () => {
    selectNewImage(images, false);
  };

  const next = () => {
    selectNewImage(images);
  };
  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return {
    selectedImage,
    selectedIndex,
    next,
    previous,
    validateCenterItem,
    handleImageLoaded,
    loaded,
    nameCenterImage,
    setLoaded
  };
}
