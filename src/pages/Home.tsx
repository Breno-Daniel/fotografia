import Carousel from "../components/Caroussel";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero-titulo">
          Fotografando a emoção <br /> em cada gesto
        </h1>
        <p className="hero-subtitulo">
          Especialista em esportes, retratos <br /> e cenas que contam histórias
        </p>

        <div className="botoes">
          <Link to="/galeria" className="btn cheio">veja mais</Link>
          <Link to="/carrinho" className="btn contorno">comprar fotos</Link>
        </div>

        <div className="carosel-wrapper">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
