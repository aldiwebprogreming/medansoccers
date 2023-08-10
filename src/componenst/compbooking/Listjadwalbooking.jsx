import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Listjadwalbooking({ idlapangan }) {
  const [booking, setBooking] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;

  const getDataBooking = async () => {
    try {
      const response = await axios.get(urlapi + "booking?id=" + idlapangan);

      // console.log(idlapangan);
      setBooking(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataBooking();
  }, []);

  return (
    <div className="container mb-5">
      <div className="card shadow">
        <div className="card-header">
          <p className="fw-bold">Jadwal hari ini </p>
        </div>
        <div className="card-body">
          {booking == "" ? (
            <div className="text-center">Jadwal bookingan hari ini kosong</div>
          ) : (
            <div>
              {booking.map((bk) => {
                return (
                  <div className="card shadow mt-3" key={bk.id}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="fw-bold">
                            <i className="fas fa-futbol"></i>
                            {"  "}
                            {bk.jam_booking}
                          </p>
                          <small className="text-danger">
                            <i className="fas fa-shield"> </i>
                            {bk.team}
                          </small>
                        </div>
                        <p className="text-success ">
                          <i className="fas fa-street-view"></i> {bk.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <Link
            to={"/formbooking/" + idlapangan}
            className="btn btn-danger mt-3 w-100"
          >
            Booking lapangan
          </Link>
        </div>
      </div>
    </div>
  );
}
