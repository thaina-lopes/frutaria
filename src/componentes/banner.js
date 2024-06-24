import styles from "./banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../img/banner.png";
import banner2 from "../img/banner.png";
import banner3 from "../img/banner.png";

const imagens = [banner, banner2, banner3];

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Ajuste essa posição conforme necessário
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={styles.imagemSlider}>
      <Slider {...settings}>
        {imagens.map((imagem, index) => (
          <div key={index}>
            <img
              src={imagem}
              alt={`Slide ${index}`}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
