import PlayIcon from "../assets/play.svg";

const CardFace = ({ question }) => (
  <>
    <p>{question}</p>
    <img src={PlayIcon} alt="imagem" />
  </>
);
export default CardFace;
