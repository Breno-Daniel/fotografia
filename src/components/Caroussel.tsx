import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Carousel.css";

const imagens = [
  "/imgs/foto1.jpg",
  "/imgs/foto2.jpg",
  "/imgs/foto3.jpg",
];

export default function Carousel() {
  const [indice, setIndice] = useState(0);
  const [transicao, setTransicao] = useState(false);

  const trocarSlide = (novoIndice: number) => {
    setTransicao(true);
    setTimeout(() => {
      setIndice(novoIndice);
      setTransicao(false);
    }, 300); // duração da transição
  };

  const anterior = () => {
    const novo = indice === 0 ? imagens.length - 1 : indice - 1;
    trocarSlide(novo);
  };

  const proximo = () => {
    const novo = indice === imagens.length - 1 ? 0 : indice + 1;
    trocarSlide(novo);
  };

  useEffect(() => {
    const intervalo = setInterval(proximo, 3000);
    return () => clearInterval(intervalo);
  }, [indice]); // atualiza sempre com novo slide

  return (
    <div className="carousel">
      <button className="seta esquerda" onClick={anterior}>
        <FaChevronLeft />
      </button>

      <div className={`carrossel-img ${transicao ? "fade" : ""}`}>
        <img src={imagens[indice]} alt={`Slide ${indice + 1}`} />
      </div>

      <button className="seta direita" onClick={proximo}>
        <FaChevronRight />
      </button>

<div className="dots">
  {imagens.map((_, i) => (
    <button
      key={i}
      className={`dot ${i === indice ? "active" : ""}`}
      onClick={() => trocarSlide(i)}
    />
  ))}
</div>

    </div>
  );
}
