import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Complogin from "../componenst/Login/Complogin";

export default function Intro() {
  const resvonsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };

  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={4}
        nav={false}
        responsive={resvonsive}
        dotsEach
        mouseDrag={false}
        touchDrag={false}
        nav
        navText={[
          "<h5><i class='fas fa-arrow-left'></i> </h5>",
          "<h5><i class='fas fa-arrow-right'></i></h5>",
        ]}
        // autoplay
      >
        <div className="item">
          <img
            className="img-fluid"
            src="slide22.svg"
            alt=""
            style={{ height: "500px" }}
          />
          <h5 className="text-center fw-bold text-danger mt-1">
            Hello Soccer Mania
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
            illum voluptatum nesciunt ipsa error voluptates omnis aut expedita
            mollitia facere nemo nisi, temporibus obcaecati libero esse ex, non
            nulla?
          </p>
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="slide222.svg"
            alt=""
            style={{ height: "500px" }}
          />
          <h5 className="text-center fw-bold text-danger mt-1">
            Medan Mini Soccer
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
            illum voluptatum nesciunt ipsa error voluptates omnis aut expedita
            mollitia facere nemo nisi, temporibus obcaecati libero esse ex, non
            nulla?
          </p>
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="slide33.svg"
            alt=""
            style={{ height: "500px" }}
          />
          <h5 className="text-center fw-bold text-danger mt-1">Member Team</h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
            illum voluptatum nesciunt ipsa error voluptates omnis aut expedita
            mollitia facere nemo nisi, temporibus obcaecati libero esse ex, non
            nulla?
          </p>
        </div>
        <div className="item">
          <img className="img-fluid" src="login.svg" />
          <Complogin />
        </div>
      </OwlCarousel>
    </div>
  );
}
