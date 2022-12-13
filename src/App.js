import "./App.scss";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";
import { useModal } from "./hooks/useModal";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
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
          <p>Conoce a nuestros principales personajes</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet tellus tempus, pharetra sem ac, accumsan nunc. Aenean tempus
            dui et faucibus pretium. Proin in diam dictum, sollicitudin augue
            et, convallis nunc.
          </p>
          <div style={{display: "flex", justifyContent:"space-evenly", gap: "2rem"}}>
        <CharacterCard>
          <CharacterCard.CardImage src={"http://www.pngall.com/wp-content/uploads/4/Rick-And-Morty.png"} />
        </CharacterCard>
            <CharacterCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
