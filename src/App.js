import "./App.scss";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";
import { useModal } from "./hooks/useModal";
import CharacterCard from "./components/CharacterCard";
import { useEffect, useContext, useState } from "react";
import { StoreContext } from "./store/CharacterContext";
import Carousel from "./components/Carousel";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./components/Button";
import dots from "./assets/dot_pattern.png";
function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [images, setImages] = useState(null);
  const { handleSetCharacters, characters } = useContext(StoreContext);

  useEffect(() => {
    getRickandMortyCharacters();
  }, []);

  useEffect(() => {
    if (!characters) return;
    const images = characters.map((character) => ({
      image: character.image,
      name: character.name
    }));
    setImages(images);
  }, [characters]);

  async function getRickandMortyCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    handleSetCharacters(data.results);
    console.log(data);
  }
  if (!characters || !images) return <p>Loading</p>;
  return (
    <div className="App">
      <main className="main__container">
        <Navbar />
        <section className="banner__section">
          <div className="banner-content__container">
            <img src={dots} />
            <Modal isOpen={isOpenLoginModal} closeModal={closeLoginModal} title="Asesorados">
              <iframe
                src="https://www.youtube.com/watch?v=DlD2sZXR8RI"
                frameBorder="0"
                allowFullScreen
                ng-show="showvideo"
                // width="420"
                // height="315"
                title="myFrame"
              ></iframe>
            </Modal>
            <PlayButton onClick={openLoginModal} />
            <h1 className="banner__title">
              Bienvenido a <p> Lorem Ipsum</p>
            </h1>

            <p className="algo">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus purus,
              elementum ut dui ac, pretium semper ex. Ut porta pretium volutpat. Nulla quis dui
              scelerisque, maximus tortor eget, dapibus ex. Pellentesque vitae iaculis ante.
            </p>
            <Button>Contáctanos</Button>
          </div>
        </section>
        {/* ***************************SECCION NUMERO DOS ************************** */}
        <section className="main-characters__section">
          <div className="main-chracters__title">
            <p>Conoce a nuestros principales personajes</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tellus tempus,
              pharetra sem ac, accumsan nunc. Aenean tempus dui et faucibus pretium. Proin in diam
              dictum, sollicitudin augue et, convallis nunc.
            </p>
          </div>

          <div className="grid__container">
            {characters.slice(0, 5).map((item) => (
              <CharacterCard className="characterCard">
                <div className="mainInfo__container">
                  <CharacterCard.CardImage src={item.image} />
                  <CharacterCard.CardTitle>{item.name}</CharacterCard.CardTitle>
                </div>
                <CharacterCard.CardContent className="cardContent">
                  <ul>
                    <li> {item.species}</li>
                    <li>{item.status}</li>
                    <li>{item.gender}</li>
                  </ul>
                </CharacterCard.CardContent>
              </CharacterCard>
            ))}
          </div>

          <Button>Contáctanos</Button>
        </section>
        {/* ***************************TERCERA SECCION *********************** */}
        <section className="carrusel__section">
          <h2>
            Conoce nuestro <p>carrusel de personajes </p>
          </h2>

          <Carousel images={images}></Carousel>
        </section>

        {/* ***************************cuarta SECCION *********************** */}

        <footer className="footer__section">
          <img src={dots} />
          <div className="footer__main-options-container">
            {footerOptions.map((footerOption) => {
              return (
                <div className="footer__options-container">
                  <p>{footerOption.title}</p>
                  <ul className="footer__options-list">
                    {footerOption.options.map((option) => (
                      <li>{option}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="footer__options-container">
              <p>Contáctanos</p>
              <ul className="footer__options-list footer__options-list--underline">
                <li>Formulario de contacto.</li>
                <li>Síguenos en todas nuestras redes sociales.</li>
              </ul>
              <div className="socialMedia__icons-container">
                <FaFacebook />
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

const footerOptions = [
  {
    title: "Inicio",
    options: ["¿Quiénes somos?", "¿Qué hacemos?", "¿Cómo lo hacemos?"]
  },
  {
    title: "Cursos",
    options: [
      "Salesforce for Success",
      "Salesforce Analyst",
      "Salesforce Administrator",
      "Salesforce Developer"
    ]
  },
  {
    title: "El programa",
    options: ["Características", "Beneficios", "Testimoniales", "Nuestra Alianza"]
  }
];
