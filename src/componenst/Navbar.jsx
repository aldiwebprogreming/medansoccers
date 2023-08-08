import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ judul, aicon }) {
  return (
    <div>
      <nav className="navbar navbar-danger bg-danger">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link to="/" className="navbar-brand text-white" href="#">
              <b>
                {" "}
                {aicon == "true" ? (
                  <i className="fas fa-arrow-left"></i>
                ) : (
                  ""
                )}{" "}
                {judul}
              </b>
            </Link>

            {/* <a
              className="navbar-brand text-white"
              href="#"
              style={{ position: "relative", left: "420px" }}
            >
              Aldi
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
