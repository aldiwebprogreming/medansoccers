import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vanue() {
  const [lapangan, setLapangan] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const getLapangang = async () => {
    try {
      const response = await axios.get(urlapi + "lapangan");
      setLapangan(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLapangang();
  }, []);
  return (
    <div>
      <p className="text-danger" style={{ fontWeight: "bold" }}>
        Booking lapangan buat kamu <i class="fa-regular fa-futbol"></i>{" "}
      </p>
      <div className="row">
        {lapangan.map((lap) => {
          return (
            <div className="col-sm-4 mt-3" key={lap.id}>
              <div class="card shadow">
                <img class="card-img-top" src={lap.gambar} />
                <div class="card-body">
                  <p class="card-title text-center fw-bold">{lap.lapangan}</p>
                  <p class="card-text">{lap.pasilitas}</p>
                  <Link
                    to={"/bookinglapangan/" + lap.slug + "/" + lap.id}
                    class="btn btn-danger btn-sm w-100"
                  >
                    Booking
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
