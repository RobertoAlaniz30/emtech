import { createContext, useState } from "react";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent";

const CharacterCardContext = createContext();

function CharacterCard({ children, className }) {
  const [open, setopen] = useState(true);
  return (
    <CharacterCardContext.Provider value={{ open, setopen }}>
      <div className={className}>{children}</div>
    </CharacterCardContext.Provider>
  );
}
CharacterCard.CardTitle = CardTitle;
CharacterCard.CardImage = CardImage;
CharacterCard.CardContent = CardContent;
export default CharacterCard;
