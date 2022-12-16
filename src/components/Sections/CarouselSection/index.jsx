import "./styles.scss";

const CarouselSection = ({ children }) => {
  return (
    <section className="carrusel__section">
      <h2>
        Conoce nuestro <p>carrusel de personajes </p>
      </h2>
      {children}
    </section>
  );
};

export default CarouselSection;
