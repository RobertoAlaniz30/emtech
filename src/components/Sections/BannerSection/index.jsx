import Button from "../../Button";
import ModalVideo from "../../ModalVideo";
import PlayButton from "../../PlayButton";
import BannerTitles from "./BannerTitles";
import dots from "../../../assets/dot_pattern.png";
import { useModal } from "../../../hooks/useModal";
import "./styles.scss";

const BannerSection = () => {
  const [isOpenModal, openModal, closeModal] = useModal();
  return (
    <section className="banner__section">
      <div className="banner-content__container">
        <ModalVideo isOpenModal={isOpenModal} closeModal={closeModal} />
        <PlayButton onClick={openModal} />
        <BannerTitles />
        <Button>Contáctanos</Button>
      </div>
      <img src={dots} />
    </section>
  );
};

export default BannerSection;
