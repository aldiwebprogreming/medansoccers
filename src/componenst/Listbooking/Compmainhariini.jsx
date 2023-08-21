import { act } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Compmainhariini() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [team, setTeam] = useState([]);
  const [viewteam, setViewteam] = useState(false);
  const [totalpemain, setTotalpemain] = useState(0);

  const getTeam = async () => {
    try {
      const response = await axios.get(
        urlapi + "Mainhariini?id_user=" + localStorage.getItem("id")
      );

      setTeam(response.data.data);
      setTotalpemain(response.data.total_pemain);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actionViewTeam = () => {
    setViewteam(!viewteam);
  };

  const Alerslot = () => {
    if (totalpemain == 10) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Yess..</strong> Slot pemain team anda hari ini sudah terpenuhi
        </div>
      );
    } else if (totalpemain < 10) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Upps..</strong> Slot pemain team anda hari ini belum terpenuhi
        </div>
      );
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div>
      <div className="card mt-1 shadow">
        <div className="card-body text-secondary">
          <div className="d-flex justify-content-between">
            <Link
              to=""
              onClick={actionViewTeam}
              style={{ textDecoration: "none" }}
            >
              <p>Lihat team anda hari ini ?</p>
            </Link>

            <Link
              to=""
              onClick={actionViewTeam}
              style={{ textDecoration: "none" }}
            >
              <p>
                <i className="fas fa-arrow-right"></i>
              </p>
            </Link>
          </div>
          <Alerslot />
          {viewteam ? (
            <>
              <div className="d-flex justify-content-between">
                <p>Team anda hari ini</p>
                <p>
                  <i className="far fa-user"></i>
                </p>
              </div>
              <hr />
              {team.map((list) => {
                return (
                  <div key={list.id}>
                    <div className="mb-2">
                      <div className="d-flex justify-content-between">
                        <img
                          src="pemain.png"
                          class="img-fluid"
                          alt="Responsive image"
                          style={{ height: "50px" }}
                        ></img>

                        <p className="" style={{ marginLeft: "10px" }}>
                          Hay {localStorage.getItem("nama")}, saya adalah team
                          anda, apkah kamu ingin lihat statistik saya ?
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>
                          <i className="far fa-user"></i> {list.nama}
                        </p>

                        {/* <p>
                        <i className="far fa-calendar-days"></i> {list.tgl_main}
                      </p> */}

                        <p>
                          <i class="fas fa-chart-simple"></i> Statistik
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
