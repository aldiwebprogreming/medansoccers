import axios from "axios";
import React, { useEffect, useState } from "react";
import Compubahfoto from "./Compubahfoto";
import Compheader from "./Compheader";

export default function Compmain() {
  const [profil, setPorfil] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;

  const getProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "profil?id=" + localStorage.getItem("id")
      );
      setPorfil(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <>
      <Compheader img={profil.image} />
      <div>
        <div
          className="container"
          style={{ position: "relative", bottom: "50px" }}
        >
          <div className="card shadow">
            <div className="card-body">
              <div class="d-flex justify-content-between">
                <p className="text-danger fw-bold">Statistik anda</p>
                <p className="text-danger fw-bold">
                  <i className="far fa-user"></i>
                </p>
              </div>
              <hr />
              <div class="d-flex justify-content-between text-secondary">
                <p>Win</p>
                <p>
                  12 Play <i className="far fa-futbol"></i>
                </p>
              </div>
              <hr />
              <div class="d-flex justify-content-between text-secondary">
                <p>Asist</p>
                <p>
                  12 Asist <i className="far fa-futbol"></i>
                </p>
              </div>
              <hr />
              <div class="d-flex justify-content-between text-secondary">
                <p>Goal</p>
                <p>
                  5 Goal <i className="far fa-futbol"></i>
                </p>
              </div>
              <hr />
              <div class="d-flex justify-content-between text-secondary">
                <p>Rank</p>
                <p className="text-warning">
                  <i className="far fa-futbol"></i>{" "}
                  <i className="far fa-futbol"></i>{" "}
                  <i className="far fa-futbol"></i>{" "}
                  <i className="far fa-futbol"></i>{" "}
                  <i className="far fa-futbol"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mb-5"
          style={{ position: "relative", bottom: "30px" }}
        >
          <div className="card shadow">
            <div className="card-body">
              <div class="d-flex justify-content-between text-danger">
                <p className="fw-bold">Profil anda</p>
                <p>
                  <i className="far fa-user"></i>
                </p>
              </div>
              <hr />
              <div className="form-group">
                <label>Nama</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.nama}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.email}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>Jenis kelamin</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.jk}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>Tanggal lahir</label>
                <input
                  type="date"
                  className="form-control mt-2 text-secondary"
                  value={profil.tgl_lahir}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>Alamat</label>
                <input
                  type="text"
                  className="form-control mt-2 text-secondary"
                  value={profil.alamat}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>NIK</label>
                <input
                  type="number"
                  className="form-control mt-2 text-secondary"
                  value={profil.nik}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label>Posisi bermain</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.posisi}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <Compubahfoto />
      </div>
    </>
  );
}
