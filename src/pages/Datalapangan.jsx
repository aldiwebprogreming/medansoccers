import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Datalapangan() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [lapangan, setLapangan] = useState([]);

  const getlapangan = async () => {
    const response = await axios.get(urlapi + "Lapangan");
    try {
      setLapangan(response.data);
      //   console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getlapangan();
  }, []);

  return (
    <div>
      {lapangan.map((lap) => {
        return (
          <div key={lap.id}>
            <>
              <a
                href={"/formbooking/" + lap.id}
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
                          <label className="fw-bold text-secondary">
                            {lap.lapangan}
                          </label>

                          {/* <small className="fw-bold text-success">
                                {"Rp."} {lap.harga_perjam} / Jam
                              </small> */}
                          <br></br>
                          <p className="text-secondary"> {lap.pasilitas}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </>
          </div>
        );
      })}
    </div>
  );
}
