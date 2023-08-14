import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Complogin from "../componenst/Login/Complogin";
import Logingoogle from "../componenst/Logingoogle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const urlapi = process.env.REACT_APP_BASE_URL;

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

  const Cekuser = async () => {
    try {
      const response = await axios.get(
        urlapi + "profil?id=" + localStorage.getItem("id")
      );
      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
      navigate("/");
    }
  };

  useEffect(() => {
    Cekuser();
  }, []);

  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={4}
        nav
        responsive={resvonsive}
        dotsEach
        mouseDrag={false}
        touchDrag={false}
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
            Selamat Datang di Medan Mini Soccer
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
            Daftar Member Karir
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
          <h5 className="text-center fw-bold text-danger mt-1">
            Booking Lapangan
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
            illum voluptatum nesciunt ipsa error voluptates omnis aut expedita
            mollitia facere nemo nisi, temporibus obcaecati libero esse ex, non
            nulla?
          </p>
        </div>
        <div className="item">
          <img className="img-fluid mt-5" src="login.svg" />
          <h5 className="text-center fw-bold text-danger mt-3">
            Login dengan akun google
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            itaque dignissimos quidem veritatis laboriosam esse incidunt ratione
            labore nesciunt odit cupiditate, ipsam distinctio aperiam provident
            consectetur voluptas, autem maxime magni?
          </p>
          <center>
            <Logingoogle />
          </center>
        </div>
      </OwlCarousel>
    </div>
  );
}
