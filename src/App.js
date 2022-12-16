import "./App.scss";
import Navbar from "./components/Navbar";
import { useMemo } from "react";
import Carousel from "./components/Carousel";
import useQuery from "./hooks/useQuery";
import BannerSection from "./components/Sections/BannerSection";
import CharactersSection from "./components/Sections/CharactersSection";
import CarouselSection from "./components/Sections/CarouselSection";
import FooterSection from "./components/Sections/FooterSection";
import FadeIn from "react-fade-in";
function App() {
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
        <FadeIn>
          <BannerSection />
          <CharactersSection data={data} />
          <CarouselSection>
            <Carousel images={images} />
          </CarouselSection>
          <FooterSection />
        </FadeIn>
      </main>
    </div>
  );
}

export default App;
