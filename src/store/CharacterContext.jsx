import { createContext, useState } from "react";

export const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])

  const handleSetCharacters = (payload)=>{
    console.log("hola")
    setCharacters(payload)
  }
  return <StoreContext.Provider value={{characters, handleSetCharacters }}>{children}</StoreContext.Provider>;
};
export default StoreProvider