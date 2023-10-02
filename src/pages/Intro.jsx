import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Logingoogle from "../componenst/Logingoogle";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
      // console.log(error.message);
      navigate("/");
    }
  };

  useEffect(() => {
    Cekuser();
  }, []);

  return (
    <div
      className="card"
      style={{
        backgroundColor: "#2b2e5a",
        borderRadius: "0px",
      }}
    >
      <div className="" style={{ marginTop: "100px", marginBottom: "100px" }}>
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
              src="img/slide.svg"
              alt=""
              style={{ height: "200px" }}
            />
            <h5 className="text-center fw-bold mt-3 text-white">
              Medan Mini Soccer
            </h5>
            <p className="text-center mx-2 text-white">
              Aplikasi mini soccer satu-satunya di Kota Medan, yuk buruan
              install aplikasinya di smartpone anda
            </p>
          </div>
          <div className="item">
            <img
              className="img-fluid"
              src="img/slide.svg"
              alt=""
              style={{ height: "200px" }}
            />
            <h5 className="text-center fw-bold  mt-1 text-white">
              Daftar Member Karir
            </h5>
            <p className="text-center text-white">
              Fitur Member karir yang dapat mempermudah anda mendapatkan team
              baru anda untuk meningkatkan karir anda
            </p>
          </div>
          <div className="item">
            <img
              className="img-fluid"
              src="img/slide.svg"
              alt=""
              style={{ height: "200px" }}
            />
            <h5
              className="text-center fw-bold text-white  mt-1"
              style={{ color: "#2b2e5a" }}
            >
              Booking Lapangan
            </h5>
            <p className="text-center text-white">
              Fitur Booking lapangan yang mempermudah anda untuk memesan
              lapangan dengan cepat tanpa harus keluar rumah
            </p>
          </div>
          <div className="item">
            <img
              className="img-fluid"
              src="img/slide.svg"
              alt=""
              style={{ height: "200px" }}
            />
            <h5
              className="text-center fw-bold text-white  mt-3"
              style={{ color: "#2b2e5a" }}
            >
              Mulai Dengan Medan Mini Soccer
            </h5>
            <p className="text-center text-white">
              Tunggu apalagi yuk buruan daftar di Medan mini soccer dan dapatkan
              kemudahan dalam bermain mini soccer,
            </p>
            <center>
              <Logingoogle />
              <hr />

              <Link
                to="/login"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Login dengan akun email
                <i className="fas fa-angel-right"></i>
              </Link>
            </center>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
