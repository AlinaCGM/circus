import React from "react";
import "./carousel.css";
import CarouselTemplate from "react-bootstrap/Carousel";
import acrobats from "../../assets/acrobats.jpg";
import circusText from "../../assets/circus-text.jpg";
import clown from "../../assets/face-paint-clown.jpg";

function Carousel() {
  return (
    <section class="section-carousel">
      <CarouselTemplate fade>
        <CarouselTemplate.Item>
          <img class="slide-img" src={acrobats} alt="Acrobats"></img>
          <CarouselTemplate.Caption>
            <h3>3 of november</h3>
            <p>CIRCUS!</p>
          </CarouselTemplate.Caption>
        </CarouselTemplate.Item>
        <CarouselTemplate.Item>
          <img
            class="slide-img"
            src={circusText}
            alt="Letters that reads 'Circus'"
          ></img>
          <CarouselTemplate.Caption>
            <h3>4 of november</h3>
            <p>CIRCUS AGAIN!!</p>
          </CarouselTemplate.Caption>
        </CarouselTemplate.Item>
        <CarouselTemplate.Item>
          <img
            class="slide-img"
            src={clown}
            alt="Person with her face painted clown-style"
          ></img>
          <CarouselTemplate.Caption>
            <h3>10 of november</h3>
            <p>ANOTHER CIRCUS!!!</p>
          </CarouselTemplate.Caption>
        </CarouselTemplate.Item>
      </CarouselTemplate>
    </section>
  );
}

export default Carousel;
