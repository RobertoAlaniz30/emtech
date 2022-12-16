import CharacterCard from "../Card";
import "./styles.scss";

const Index = ({ item }) => {
  return (
    <CharacterCard className="characterCard">
      <div className="characterCard__img-container">
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
  );
};

export default Index;
