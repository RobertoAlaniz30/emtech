import "./App.scss";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";
import { useModal } from "./hooks/useModal";
import CharacterCard from "./components/CharacterCard";
import { Fragment, useMemo } from "react";
import Carousel from "./components/Carousel";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./components/Button";
import dots from "./assets/dot_pattern.png";
import useQuery from "./hooks/useQuery";
function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const { data, loading } = useQuery("https://rickandmortyapi.com/api/character", "characters");

  const images = useMemo(() => {
    if (!data.characters) return;
    const img = data.characters.map((character) => ({
      image: character.image,
      name: character.name
    }));
    return img;
  }, [data.characters]);

  if (loading) return <p>Loading</p>;
  return (
    <div className="App">
      <main className="main__container">
        <Navbar />
        <section className="banner__section">
          <div className="banner-content__container">
            <Modal isOpen={isOpenLoginModal} closeModal={closeLoginModal} title="Asesorados">
              <iframe
                src="https://www.youtube.com/watch?v=DlD2sZXR8RI"
                allowFullScreen
                ng-show="showvideo"
                width="420"
                height="315"
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
          <img src={dots} />
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
            {data.characters.slice(0, 5).map((item, index) => (
              <Fragment key={index}>
                <CharacterCard className="characterCard">
                  <div className="mainInfo__container">
                    <CharacterCard.CardImage src={item.image} />
                    <CharacterCard.CardTitle>{item.name}</CharacterCard.CardTitle>
                  </div>
                  <CharacterCard.CardContent className="cardContent">
                    <ul>
                      <li>{item.species}</li>
                      <li>{item.status}</li>
                      <li>{item.gender}</li>
                    </ul>
                  </CharacterCard.CardContent>
                </CharacterCard>
              </Fragment>
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
            {footerOptions.map((footerOption, index) => {
              return (
                <div key={index} className="footer__options-container">
                  <p>{footerOption.title}</p>
                  <ul className="footer__options-list">
                    {footerOption.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="footer__options-container">
              <p>Contáctanos</p>
              <div className="footer__options-list footer__options-list--underline">
                <p>Formulario de contacto.</p>
                <p>Síguenos en todas nuestras redes sociales.</p>
              </div>
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
