import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      <main className="main__container">
        <Navbar />
        <div>
          <section className="banner__section">
            <Modal>
              <iframe
                src="https://www.youtube.com/embed/N0cMUC9DBJY"
                frameBorder="0"
                allowFullScreen
                ng-show="showvideo"
                width="420"
                height="315"
                title="myFrame"
              ></iframe>
            </Modal>
            <PlayButton />

            <h1 className="banner__title">
              Bienvenido a <p> Lorem Ipsum</p>
            </h1>

            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tellus purus, elementum ut dui ac, pretium semper ex.
              Ut porta pretium volutpat. Nulla quis dui scelerisque, maximus
              tortor eget, dapibus ex. Pellentesque vitae iaculis ante.
              Vestibulum mollis sodales sapien sed aliquam.{" "}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
