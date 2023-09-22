import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Databookinglapangan() {
  const [booking, setBooking] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;

  const date = new Date();
  let tgl = new Date();
  let format_tgl =
    tgl.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + tgl.getDate()).slice(-2);

  const getData = async () => {
    try {
      const response = await axios.get(
        urlapi + "Databookinglapangan?iduser=" + localStorage.getItem("id")
      );
      setBooking(response.data);
    } catch (error) {}
  };

  const notify = () => {
    toast.success("Booking berhasil dihapus !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const deleteData = async (id) => {
    await axios
      .post(urlapi + "Databookinglapangan", {
        id: id,
      })
      .then((response) => {
        getData();
        notify();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {booking == null ? (
        <div>Data booking anda berhsil</div>
      ) : (
        <>
          {booking.map((data, index) => {
            return (
              <div
                className="card mb-3 shadow"
                key={index}
                style={{ border: "0px" }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-4">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/000/206/745/original/vector-isometric-soccer-stadium.png"
                        class="rounded float-start img-fluid h-100"
                        alt=""
                      ></img>
                    </div>
                    <div className="col-sm-8 col-8">
                      <label>
                        <strong>{data.lapangan}</strong>
                      </label>{" "}
                      <br />
                      <small>
                        Hay, {localStorage.getItem("nama")} booking lapangan
                        anda{" "}
                        {data.status_pembayaran == 200
                          ? "Berhasil"
                          : "Tertunda"}
                      </small>
                      <hr></hr>
                      <p className="d-flex justify-content-between">
                        <small>
                          {format_tgl == data.tgl ? "Hari ini" : data.tgl}
                        </small>

                        <small>
                          {data.status_pembayaran == 200
                            ? "Berhasil"
                            : "Tertunda"}
                        </small>

                        <i
                          className="fas fa-trash text-danger"
                          onClick={() => deleteData(data.id)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
