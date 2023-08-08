import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cardbooking() {
  const [lapangan, setLapangan] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backmedansoccers/api/lapangan"
      );
      setLapangan(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-12">
          {lapangan.map((lap) => {
            return (
              <Link
                to={"/bookinglapangan/" + lap.slug + "/" + lap.id}
                style={{ textDecoration: "none" }}
                key={lap.id}
              >
                <div className="card cardBooking shadow mt-3" key={lap.id}>
                  <div className="row g-0">
                    <div className="col-6 col-md-5">
                      <img
                        src={lap.gambar}
                        className="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="col-6 col-md-7">
                      <div className="card-body d-flex flex-column">
                        <div className="h-100">
                          <label className="fw-bold text-danger">
                            {lap.lapangan}
                          </label>
                          <br></br>
                          <small className="fw-bold text-success">
                            {"Rp."} {lap.harga_perjam} / Jam
                          </small>
                          <br></br>
                          {lap.pasilitas}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
