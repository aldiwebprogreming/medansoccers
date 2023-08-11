import React from "react";

import { Link } from "react-router-dom";

export default function CardMenu() {
  return (
    <div>
      <div className="container">
        <div className="card cardMenu">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3 col-3">
                <Link to={"/about"} style={{ textDecoration: "none" }}>
                  <center>
                    <img
                      src="football.png"
                      className="img-fluid"
                      alt="Responsive image"
                    />
                    <p
                      className="text-danger mt-2"
                      style={{ fontSize: "12px" }}
                    >
                      About
                    </p>
                  </center>
                </Link>
              </div>

              <div className="col-sm-3 col-3">
                <Link to={"/booking"} style={{ textDecoration: "none" }}>
                  <center>
                    <img src="3.png" class="img-fluid" alt="Responsive image" />
                    <p
                      className="text-danger font-weight-bold mt-2"
                      style={{ fontSize: "12px" }}
                    >
                      Booking
                    </p>
                  </center>
                </Link>
              </div>

              <div className="col-sm-3 col-3">
                <center>
                  <img src="2.png" class="img-fluid" alt="Responsive image" />
                  <p
                    className="text-danger font-weight-bold mt-2"
                    style={{ fontSize: "12px" }}
                  >
                    Sparing
                  </p>
                </center>
              </div>
              <div className="col-sm-3 col-3">
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <center>
                    <img
                      src="man.png"
                      class="img-fluid"
                      alt="Responsive image"
                    />
                    <p
                      className="text-danger font-weight-bold mt-2"
                      style={{ fontSize: "12px" }}
                    >
                      Login
                    </p>
                  </center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
