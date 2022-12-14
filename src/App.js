import "./App.scss";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";
import { useModal } from "./hooks/useModal";
import CharacterCard from "./components/CharacterCard";
import { useEffect, useContext, useState } from "react";
import { StoreContext } from "./store/CharacterContext";
import List from "./components/List";
import Carousel from "./components/Carousel";
function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [images, setImages] = useState(null);
  const { handleSetCharacters, characters } = useContext(StoreContext);

  useEffect(() => {
    getRickandMortyCharacters();
  }, []);

  useEffect(() => {
    if (!characters) return;
    const images = characters.map((character) => character.image);
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
        <section className="banner__section">
          <Navbar />

          <div className="banner-content__container">
            <Modal
              isOpen={isOpenLoginModal}
              closeModal={closeLoginModal}
              title="Asesorados"
            >
              <iframe
                src="https://www.youtube.com/embed/N0cMUC9DBJY"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tellus purus, elementum ut dui ac, pretium semper ex.
              Ut porta pretium volutpat. Nulla quis dui scelerisque, maximus
              tortor eget, dapibus ex. Pellentesque vitae iaculis ante.
            </p>
            <button className="contact-button">Contáctanos</button>
          </div>
        </section>
        {/* ***************************SECCION NUMERO DOS ************************** */}
        <section className="main-characters__section">
          <div>
            <p>Conoce a nuestros principales personajes</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet tellus tempus, pharetra sem ac, accumsan nunc. Aenean tempus
              dui et faucibus pretium. Proin in diam dictum, sollicitudin augue
              et, convallis nunc.
            </p>
          </div>

          <div className="grid__container">
            <List
              items={characters.slice(0, 5)}
              render={(item) => (
                <CharacterCard className="characterCard">
                  <div className="mainInfo__container face">
                    <div>
                      <CharacterCard.CardImage src={item.image} />
                    </div>
                    <CharacterCard.CardTitle>
                      {item.name}
                    </CharacterCard.CardTitle>
                  </div>
                  <CharacterCard.CardContent className="cardContent face">
                    <ul>
                      <li> Especie: {item.species}</li>
                      <li> Estatus: {item.status}</li>
                      <li>Genero: {item.gender}</li>
                    </ul>
                  </CharacterCard.CardContent>
                </CharacterCard>
              )}
            />
          </div>
          <button className="contact-button">Contáctanos</button>
        </section>
        {/* ***************************TERCERA SECCION *********************** */}
        <section className="carrusel__section">
          <h2>
            Conoce nuestro <p>carrusel de personajes </p>
          </h2>
          <Carousel images={images} />
        </section>
      </main>
    </div>
  );
}

export default App;
