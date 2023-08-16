import React, { useEffect, useState } from "react";
import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Jadwalmember/Compheader";
import axios from "axios";
import Compmain from "../componenst/Jadwalmember/Compmain";

export default function Jadwalmember() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [karir, setKarir] = useState([]);

  const getKarir = async () => {
    try {
      const response = await axios.get(
        urlapi + "AddMemberKarir?id_user=" + localStorage.getItem("id")
      );
      setKarir(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getKarir();
  }, []);

  return (
    <div>
      <Navbar judul="Member karir" aicon="true" />
      <Compheader />

      <div
        className="container"
        style={{ position: "relative", bottom: "130px" }}
      >
        <div className="card shadow" style={{ height: "250px" }}>
          <div className="card-body">
            <div class="d-flex justify-content-between">
              <p className="text-danger fw-bold">Berlangganan</p>
              <p className="text-danger fw-bold">
                <i className="fas fa-calendar-days"></i> {karir.waktu_member}{" "}
                Bulan
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <small className="text-danger">
                <center>Tanggal mulai : {karir.tgl_mulai}</center>
              </small>

              <small className="text-danger">
                <center>Tanggal berakhir : {karir.tgl_selesai}</center>
              </small>
            </div>

            <hr />
            <div className="row mb-5">
              <div className="col-sm-6 col-6">
                <div className="card bg-danger text-white">
                  <div className="card-body">
                    Slot Bermain
                    <h4>
                      {karir.jml_bermain} <i className="fas fa-futbol"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-6">
                <div className="card bg-danger text-white">
                  <div className="card-body">
                    Sisa Bermain
                    <h4>
                      10 <i className="fas fa-futbol"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Compmain jml_main={karir.jml_bermain} />
    </div>
  );
}
