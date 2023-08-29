import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Compmainhariini from "./Compmainhariini";

export default function Complist() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [karir, setKarir] = useState([]);
  const [sisa, setSisa] = useState(0);
  const [databookingmain, setDatabookingmain] = useState([]);
  const [datamain, setDatamain] = useState(true);
  const [profil, setProfil] = useState("");
  //   const [main, setMain] = useState([]);

  const getKarir = async () => {
    try {
      const response = await axios.get(
        urlapi +
          "AddMemberKarir?id_user=" +
          localStorage.getItem("id") +
          "&&status=200"
      );
      setKarir(response.data);
      setSisa(response.data.sisa_bermain);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBooking = async () => {
    try {
      const response = await axios.get(
        urlapi + "Bookingmain?id_user=" + localStorage.getItem("id")
      );
      setDatabookingmain(response.data);
      setDatamain(true);
    } catch (error) {
      console.log(error.message);
      setDatamain(false);
    }
  };

  const getProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "Profil?id=" + localStorage.getItem("id")
      );
      setProfil(response.data.image);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderTeam = (team) => {
    if (team == "Merah") {
      return (
        <p className="text-danger">
          {" "}
          <i class="fas fa-shield"></i> {team}
        </p>
      );
    } else if (team == "Biru") {
      return (
        <p className="text-primary">
          {" "}
          <i class="fas fa-shield"></i> {team}
        </p>
      );
    } else if (team == "Putih") {
      return (
        <p className="text-secondary">
          {" "}
          <i class="fas fa-shield"></i> {team}
        </p>
      );
    } else {
      return (
        <p className="">
          {" "}
          <i class="fas fa-shield"></i> {team}
        </p>
      );
    }
  };

  useEffect(() => {
    getKarir();
    getBooking();
    getProfil();
  }, []);

  return (
    <div>
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
                      {sisa} <i className="fas fa-futbol"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-2 shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="text-danger">Daftar booking main anda</p>
              <p className="text-danger">
                <i className="fas fa-futbol"></i>
              </p>
            </div>
            <p className="text-success">
              Ayoo {localStorage.getItem("nama")}, mainkan sisa slot main anda
              sekarang <br />
              <div className="d-flex justify-content-between">
                <Link
                  to="/jadwalmemberkarir"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  Gunakan sisa slot member karir anda sekarang
                </Link>
                <i className="fas fa-arrow-right text-primary"></i>
              </div>
            </p>
          </div>
        </div>

        {datamain ? (
          <div>
            <Compmainhariini />{" "}
            {databookingmain.map((data) => {
              return (
                <div className="card shadow mt-2" key={data.id}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <Link to="/profilanda">
                        {profil == "" ? (
                          <img
                            src="pemain.png"
                            class="img-fluid"
                            alt="Responsive image"
                            style={{ height: "50px" }}
                          ></img>
                        ) : (
                          <img
                            src={profil}
                            class="img-fluid"
                            alt="Responsive image"
                            style={{ height: "50px" }}
                          ></img>
                        )}
                      </Link>
                      <p className="text-danger" style={{ marginLeft: "10px" }}>
                        Anda telah melakukan booking main di medan mini soccer
                        pada Tanggal :
                      </p>
                    </div>
                    <div className="d-flex justify-content-around  fw-bold">
                      <small> {renderTeam(data.team)} </small>
                      <small className="text-danger">
                        <i className="far fa-calendar-days"></i> {data.tgl_main}
                      </small>
                      <small className="text-danger">
                        <i className="far fa-clock"></i> {data.jam_main}{" "}
                        {data.jam_selesai} WIB - End
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <center>
              <img
                src="trash.svg"
                className="img-fluid mt-5"
                alt="Responsive image"
              ></img>
              <h4 className="mt-3 text-danger fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h4>
              <p>
                Untuk saat ini data main anda masih kosong, buruan gunakan slot
                bermain anda sekarang juga sebelum masa aktif member karir anda
                habis
              </p>

              <Link to="/jadwalmemberkarir" className="btn btn-danger">
                Gunakan slot main <i className="fas fa-futbol"></i>
              </Link>
            </center>
          </div>
        )}
      </div>
    </div>
  );
}
