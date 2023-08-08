import React from "react";
import Navbar from "../componenst/Navbar";
import Header from "../componenst/compbooking/Header";
import Cardbooking from "../componenst/compbooking/Cardbooking";

export default function Booking() {
  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <Header />
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between text-danger">
            <label>Lapangan yang tersedia</label>
            <label>
              <i className="fas fa-arrow-right"></i>
            </label>
          </div>
          <hr />
          <Cardbooking />
        </div>
      </div>
    </div>
  );
}
