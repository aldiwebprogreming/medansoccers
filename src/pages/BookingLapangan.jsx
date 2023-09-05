import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../componenst/Navbar";
import Headerbokinglapangan from "../componenst/compbooking/Headerbokinglapangan";
import axios from "axios";
import CompSlide from "../componenst/compbooking/CompSlide";
import Listjadwalbooking from "../componenst/compbooking/Listjadwalbooking";

export default function BookingLapangan() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [lapangan, setLapangan] = useState([]);
  const { slug, id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(urlapi + "lapangan?slug=" + slug);
      setLapangan(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <Headerbokinglapangan
        judul={lapangan.lapangan}
        title={lapangan.pasilitas}
      />
      <CompSlide gambar={lapangan.gambar} />

      <div className="container">
        <div
          className="card shadow"
          style={{ position: "relative", bottom: "50px", border: "none" }}
        >
          <div className="card-body">
            <p className="fw-bold">Keterangan</p>
            <p className="text-secondary">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              suscipit libero rem fuga cum maxime delectus, in iure minima iste
              fugiat est at consectetur consequatur molestiae similique
              doloribus nulla! Accusamus.
            </p>
          </div>
        </div>
        <div
          className="card mb-3 shadow"
          style={{ border: "none", position: "relative", bottom: "20px" }}
        >
          <div className="card-body">
            <p className="fw-bold">Fasilitas</p>
            <div className="d-flex justify-content-between text-secondary mt-3">
              <div>
                <p>
                  <i className="fa-solid fa-utensils"></i> Cafe & Resto
                </p>
              </div>

              <div>
                <p>
                  <i className="fa-solid fa-mosque"></i> Musholla
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between text-secondary mt-3">
              <div>
                <p>
                  <i className="fa-solid fa-car"></i> Parkir Mobil
                </p>
              </div>

              <div>
                <p>
                  <i className="fa-solid fa-motorcycle"></i> Parkir Motor
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between text-secondary mt-3">
              <div>
                <p>
                  <i className="fa-solid fa-door-open"></i> Ruang Ganti
                </p>
              </div>

              <div>
                <p>
                  <i class="fa-solid fa-toilet-paper"></i> Toilet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card mb-3 shadow"
          style={{ border: "none", position: "relative", bottom: "20px" }}
        >
          <div className="card-body">
            <p className="fw-bold">Jam Oprasional</p>
            <div className="d-flex justify-content-between mt-3">
              <p className="text-secondary">
                <i className="fas fa-calendar-days"></i> Senin - Minggu
              </p>
              <p className="text-secondary">
                {" "}
                <i className="far fa-clock"></i> 06.00 - 24.00 WIB
              </p>
            </div>
          </div>
        </div>

        <div
          className="card mb-3 shadow"
          style={{ border: "none", position: "relative", bottom: "20px" }}
        >
          <div className="card-body">
            <p className="fw-bold">Lokasi Lapangan</p>
            <p className="text-secondary">
              Jl. Setia ujung no 38. Km.1 medan binjai kec. sunggal,
              Deliserdanga, Sumatera utara
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="card shadow "
          style={{ position: "relative", bottom: "20px" }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between mt-3">
              <p className="fw-bold text-secondary">Rp 300.000 / jam</p>
            </div>
            <button className="btn btn-danger btn-sm w-100">Booking</button>
          </div>
        </div>
      </div>

      {/* <Listjadwalbooking idlapangan={id} /> */}

      {/* <Formbooking /> */}
      {/* <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between text-danger">
            <label>
              <i className="fas fa-calendar-days"></i> Booking lapangan kamu
              disini
            </label>
            <label>
              <i className="fas fa-arrow-right"></i>
            </label>
          </div>
          <hr />
        </div>
      </div> */}
    </div>
  );
}
