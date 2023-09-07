import React, { useEffect, useState } from "react";
import Navbar from "../componenst/Navbar";
import Header from "../componenst/compbooking/Header";
import Cardbooking from "../componenst/compbooking/Cardbooking";
import Loadlabel from "../skeleton/Loadlabel";

export default function Booking() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);
  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <Header />
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between fw-bold">
            {load ? <label>Lapangan yang tersedia</label> : <Loadlabel />}

            <label>
              {load ? <i className="fas fa-futbol"></i> : <Loadlabel />}
            </label>
          </div>
          <hr />
          <Cardbooking />
        </div>
      </div>
    </div>
  );
}
