import { Fragment } from "react";
import CharacterCard from "../../CharacterCard";
import Button from "../../Button";
import "./styles.scss";

export default function CharactersSection({ data }) {
  return (
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
            <CharacterCard item={item} />
          </Fragment>
        ))}
      </div>

      <Button>Contáctanos</Button>
    </section>
  );
}
