import axios from "axios";
import React, { useEffect, useState } from "react";
import Compubahfoto from "./Compubahfoto";
import Compheader from "./Compheader";
import Compdataasist from "./Compdataasist";
import Compdatagoal from "./Compdatagoal";
import Compdataplay from "./Compdataplay";
// import { act } from "react-dom/test-utils";

export default function Compmain() {
  const [profil, setPorfil] = useState([]);
  const [play, setPlay] = useState(false);
  const [asist, setAsist] = useState(false);
  const [goal, setGoal] = useState(false);
  const [win, setWin] = useState(false);
  const [datamain, setDatamain] = useState([]);
  const [jmlmain, setJmlmain] = useState();
  const urlapi = process.env.REACT_APP_BASE_URL;

  const getProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "profil?id=" + localStorage.getItem("id")
      );
      setPorfil(response.data);
    } catch (error) {
      // console.log(error.message);
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
              <div className="d-flex justify-content-between">
                <p className="text-danger fw-bold">Statistik anda</p>
                <p className="text-danger fw-bold">
                  <i className="far fa-user"></i>
                </p>
              </div>
              <hr />
              <Compdataplay />
              <hr />
              {/* <div class="d-flex justify-content-between text-secondary">
                <p>Win</p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => action("Win")}
                  >
                    12 Win <i class="fas fa-chevron-right"></i>
                  </a>

                  <div className="collapse" id="collapseExampleplay">
                    <div class="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </p>
              </div>
              {win ? (
                <div className="card border-primary">
                  <div className="card card-body"></div>
                </div>
              ) : (
                ""
              )}

              <hr /> */}
              <Compdataasist />
              <hr />
              <Compdatagoal />
              <hr />
              <div className="d-flex justify-content-between text-secondary">
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
              <div className="d-flex justify-content-between text-danger">
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
                />
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
