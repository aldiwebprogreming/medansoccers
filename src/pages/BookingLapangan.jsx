import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../componenst/Navbar";
import Headerbokinglapangan from "../componenst/compbooking/Headerbokinglapangan";
import axios from "axios";
import CompSlide from "../componenst/compbooking/CompSlide";
import Listjadwalbooking from "../componenst/compbooking/Listjadwalbooking";
import Formbooking from "./Formbooking";

export default function BookingLapangan() {
  const [lapangan, setLapangan] = useState([]);
  const { slug, id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backmedansoccers/api/lapangan?slug=" + slug
      );
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
        <div className="card mb-3 shadow">
          <div className="card-header">
            <h5 className="fw-bold">Fasilitas</h5>
          </div>
          <div className="card-body">
            <p>{lapangan.pasilitas}</p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-header">
            <h5 className="fw-bold">Oprasional</h5>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p>
                <i className="fas fa-calendar-days"></i> Senin - Jum'at
              </p>
              <p>
                {" "}
                <i className="fas fa-clock"></i> 10.00 - 22.00 WIB
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>
                {" "}
                <i className="fas fa-calendar-days"></i> Sabtu - Minggu
              </p>
              <p>
                {" "}
                <i className="fas fa-clock"></i> 10.00 - 24.00 WIB
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-header">
            <h5 className="fw-bold">Lokasi</h5>
          </div>
          <div className="card-body">
            <p>
              Jl. Setia ujung no 38. Km.1 medan binjai kec. sunggal,
              Deliserdanga, Sumatera utara
            </p>
          </div>
        </div>
      </div>
      <Listjadwalbooking idlapangan={id} />
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
