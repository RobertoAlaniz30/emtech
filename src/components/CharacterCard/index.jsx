import { createContext, useContext , useState, useSyncExternalStore} from "react";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage/CardImage";
import "./styles.scss"

const CharacterCardContext = createContext();

function CharacterCard({ children }) {
    const [open, setopen] = useState(true)
  return (
    <CharacterCardContext.Provider value={{open}}>
      <div className="characterCard">{children}</div>
    </CharacterCardContext.Provider>
  );
}
CharacterCard.CardTitle = CardTitle;
CharacterCard.CardImage = CardImage;
export default CharacterCard;
