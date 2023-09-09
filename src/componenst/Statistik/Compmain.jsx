import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Complisttopwin from "./Complisttopwin";
import Complistopscore from "./Complisttoscore";
import Complistopasist from "./Complistopasist";
import Complisttopkiper from "./Complisttopkiper";
import Loadstatistik from "../../skeleton/Loadstatistik";

export default function Compmain() {
  const [listwin, setListwin] = useState(true);
  const [listscore, setListscore] = useState(false);
  const [listasist, setListasist] = useState(false);
  const [listkiper, setListkiper] = useState(false);
  const [load, setLoad] = useState(false);

  const handleScore = () => {
    setListwin(false);
    setListasist(false);
    setListkiper(false);
    setListscore(!listscore);
  };

  const handleWin = () => {
    setListscore(false);
    setListasist(false);
    setListkiper(false);
    setListwin(!listwin);
  };

  const handleAsist = () => {
    setListscore(false);
    setListwin(false);
    setListkiper(false);
    setListasist(!listasist);
  };

  const handleKiper = () => {
    setListscore(false);
    setListwin(false);
    setListasist(false);
    setListkiper(!listkiper);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 300);
  });

  return (
    <div>
      <div
        className="container"
        style={{ position: "relative", bottom: "60px" }}
      >
        {load ? (
          <>
            <div
              className="card shadow"
              style={{ border: "none", position: "relative", bottom: "60px" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between fw-bold">
                  <div>
                    <h3 className="fw-bold text-info">
                      10<i className="fas fa-user"></i>
                    </h3>
                    <p>Play</p>
                  </div>

                  <div>
                    <h3 className="fw-bold text-success">
                      0 <i className="fas fa-people-arrows"></i>
                    </h3>
                    <p>Assist</p>
                  </div>
                  <div>
                    <h3 className="fw-bold text-danger">
                      5 <i className="far fa-futbol"></i>
                    </h3>
                    <p>Goal</p>
                  </div>
                </div>

                <div className="alert alert-danger mt-2" role="alert">
                  <label className="fw-bold">
                    {" "}
                    Ayooo {localStorage.getItem("nama")}{" "}
                  </label>{" "}
                  tingkatkan statistik anda sekarang
                  <br></br>
                  <Link
                    to="/jadwalmemberkarir"
                    className="btn btn-danger btn-sm mt-2"
                  >
                    Main sekarang
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="card shadow"
              style={{ position: "relative", bottom: "50px", border: "none" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <small
                    className={
                      listwin ? "text-primary fw-bold" : "text-secondary"
                    }
                    onClick={() => handleWin()}
                    style={{ cursor: "pointer" }}
                  >
                    Top Win
                  </small>

                  <small
                    className={
                      listscore ? "text-primary fw-bold" : "text-secondary"
                    }
                    onClick={() => handleScore()}
                    style={{ cursor: "pointer" }}
                  >
                    Top Score
                  </small>

                  <small
                    className={
                      listasist ? "text-primary fw-bold" : "text-secondary"
                    }
                    onClick={() => handleAsist()}
                    style={{ cursor: "pointer" }}
                  >
                    Top Assist
                  </small>

                  <small
                    className={
                      listkiper ? "text-primary fw-bold" : "text-secondary"
                    }
                    onClick={() => handleKiper()}
                    style={{ cursor: "pointer" }}
                  >
                    Top Kiper
                  </small>
                </div>
                <hr />
                <div className={listwin ? "" : "d-none"}>
                  <Complisttopwin />
                </div>

                <div className={listscore ? "" : "d-none"}>
                  <Complistopscore />
                </div>

                <div className={listasist ? "" : "d-none"}>
                  <Complistopasist />
                </div>

                <div className={listkiper ? "" : "d-none"}>
                  <Complisttopkiper />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loadstatistik />
        )}
      </div>
    </div>
  );
}
