import React from "react";
import Compcrousel from "./Compcrousel";
import { Link } from "react-router-dom";

export default function CardMenu() {
  return (
    <div>
      <div className="container">
        <div className="card cardMenu">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3 col-3">
                <center>
                  <img
                    src="football.png"
                    className="img-fluid"
                    alt="Responsive image"
                  />
                  <p className="text-danger mt-2">About</p>
                </center>
              </div>

              <div className="col-sm-3 col-3">
                <Link to={"/booking"} style={{ textDecoration: "none" }}>
                  <center>
                    <img src="3.png" class="img-fluid" alt="Responsive image" />
                    <p className="text-danger font-weight-bold mt-2">Booking</p>
                  </center>
                </Link>
              </div>

              <div className="col-sm-3 col-3">
                <center>
                  <img src="2.png" class="img-fluid" alt="Responsive image" />
                  <p className="text-danger font-weight-bold mt-2">Sparing</p>
                </center>
              </div>
              <div className="col-sm-3 col-3">
                <center>
                  <img src="man.png" class="img-fluid" alt="Responsive image" />
                  <p className="text-danger font-weight-bold mt-2">Login</p>
                </center>
              </div>
              {/* <Compcrousel /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
