import React from "react";
import "./carousel.css";
import CarouselTemplate from "react-bootstrap/Carousel";
import acrobats from "../../assets/acrobats.jpg";
import circusText from "../../assets/circus-text.jpg";
import clown from "../../assets/face-paint-clown.jpg";

function Carousel() {
  return (
    <div id="shows" className="container-carousel">
      <section>
        <h2>Exciting Circus Shows in November</h2>
        <div className="row my-5">
          <div className="col-sm-10 mx-auto">
            <CarouselTemplate className="carousel" fade controls>
              <CarouselTemplate.Item>
                <img
                  src={acrobats}
                  alt="Acrobats"
                  className="img-fluid"
                  width="100%"
                ></img>
                <CarouselTemplate.Caption>
                  <h3 className="slide-title">
                    <date>3rd of november</date>
                  </h3>
                  <p className="reset slide-info">Circus!</p>
                </CarouselTemplate.Caption>
              </CarouselTemplate.Item>
              <CarouselTemplate.Item>
                <img
                  src={circusText}
                  alt="Letters that reads 'Circus'"
                  className="img-fluid"
                  width="100%"
                ></img>
                <CarouselTemplate.Caption>
                  <h3 className="slide-title">
                    <date>4th of november</date>
                  </h3>
                  <p className="reset slide-info">Circus again!!</p>
                </CarouselTemplate.Caption>
              </CarouselTemplate.Item>
              <CarouselTemplate.Item>
                <img
                  src={clown}
                  alt="Person with her face painted clown-style"
                  className="img-fluid"
                  width="100%"
                ></img>
                <CarouselTemplate.Caption>
                  <h3 className="slide-title">
                    <date>10th of november</date>
                  </h3>
                  <p className="reset slide-info">Another circus!!!</p>
                </CarouselTemplate.Caption>
              </CarouselTemplate.Item>
            </CarouselTemplate>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
