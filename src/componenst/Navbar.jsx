import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ judul, aicon }) {
  return (
    <div>
      <nav
        className="navbar navbar-danger  shadow mb-5"
        style={{
          position: "fixed",
          zIndex: "9999",
          width: "663px",
          backgroundColor: "#2b2e5a",
          color: "white",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link to="/home" className="navbar-brand text-white" href="#">
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
