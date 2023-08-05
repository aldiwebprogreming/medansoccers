import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-danger bg-danger">
        <div className="container">
          <div class="d-flex justify-content-between">
            <a className="navbar-brand text-white" href="#">
              <b>Medansoccers</b>
            </a>

            <a
              className="navbar-brand text-white"
              href="#"
              style={{ position: "relative", left: "420px" }}
            >
              Aldi
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
