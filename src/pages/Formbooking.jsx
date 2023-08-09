import React, { useEffect, useState } from "react";
import Navbar from "../componenst/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function Formbooking() {
  const { idlapangan } = useParams();
  const [jambooking, setJambooking] = useState("");
  const [tglbooking, setTglbooking] = useState("");
  const [namateam, setNamateam] = useState("");
  const [totalHarga, setTotalharga] = useState("");
  const [namaLapangan, setTNamalapangan] = useState("");
  const [alert, setAlert] = useState("");

  const notify = () =>
    toast.success("Booking lapangan anda berhasil !", {
      position: toast.POSITION.TOP_CENTER,
    });

  const getLapangan = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backmedansoccers/api/Lapangan?id=" + idlapangan
      );
      setTotalharga(response.data.harga_perjam);
      setTNamalapangan(response.data.lapangan);
    } catch (error) {
      console.log(error.message);
    }
  };

  const cekBookingTgl = (e) => {
    setTglbooking(e.target.value);
    actionCekTgl(e.target.value);
  };

  const cekBookingJam = (e) => {
    setJambooking(e.target.value);
    actionCekJam(e.target.value);
  };

  const actionCekTgl = async (tgl) => {
    await axios
      .post("http://localhost/backmedansoccers/api/Cekbooking", {
        jam: jambooking,
        tgl: tgl,
        id_lapangan: idlapangan,
      })
      .then((response) => {
        setAlert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actionCekJam = async (jam) => {
    await axios
      .post("http://localhost/backmedansoccers/api/Cekbooking", {
        jam: jam,
        tgl: tglbooking,
        id_lapangan: idlapangan,
      })
      .then((response) => {
        setAlert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PayBooking = async () => {
    await axios
      .post("http://localhost/backmedansoccers/api/pay", {
        total: totalHarga,
        team: namateam,
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          window.snap.pay(token, {
            onSuccess: (result) => {
              console.log(result);
              addBooking(result);
            },
            onPending: (result) => {
              console.log(result.status_message);
              addBooking(result);
            },
            onError: (result) => {
              console.log(result.status_message);
            },
          });
        }
      });

    const addBooking = async (result) => {
      await axios
        .post("http://localhost/backmedansoccers/api/Addbooking", {
          jam: jambooking,
          tgl: tglbooking,
          team: namateam,
          id_lapangan: idlapangan,
          kode_status: result.status_code,
        })
        .then((response) => {
          setJambooking("Pilih jam booking");
          setNamateam("");
          setTglbooking("");
          notify();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  useEffect(() => {
    getLapangan();
  }, []);

  return (
    <div>
      <Navbar judul="form booking" aicon="true" />
      <div className="card container">
        <div className="card my-3 shadow">
          <div className="card-header text-danger">Kententuan booking</div>
          <div className="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            labore magni, quis totam iusto id molestias nam unde optio possimus
            odit nesciunt hic tenetur sit facere recusandae sunt autem sed!
          </div>
        </div>

        <div className="card my-3 shadow">
          <div className="card-header text-danger">Form booking</div>
          <div className="card-body">
            {alert == "tersedia" ? (
              <div className="alert alert-danger" role="alert">
                Mohon maaf jadwal booking yang anda masukan telah tersedia
              </div>
            ) : (
              ""
            )}

            <div className="row mb-3">
              <div className="form-group col-md-6">
                <label>Lapangan</label>
                <input
                  type="text"
                  value={namaLapangan}
                  className="form-control mt-3"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Harga</label>
                <br />
                <input
                  type="number"
                  value={totalHarga}
                  className="form-control mt-3"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="mb-2">Jam Booking</label>
              <select
                className="form-control"
                name="jam"
                onChange={(e) => cekBookingJam(e)}
              >
                <option>{jambooking}</option>
                <option>10.00 - 12.00</option>
                <option>12.00 - 14.00</option>
                <option>14.00 - 16.00</option>
                <option>16.00 - 18.00</option>
                <option>18.00 - 20.00</option>
                <option>20.00 - 22.00</option>
                <option>22.00 - 24.00</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label className="mb-2">Tanggal Booking</label>
              <input
                type="date"
                className="form-control"
                value={tglbooking}
                onChange={(e) => cekBookingTgl(e)}
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-2">Nama Team</label>
              <input
                type="text"
                className="form-control"
                required=""
                value={namateam}
                onChange={(e) => setNamateam(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <button
                className={`btn btn-danger w-100 ${
                  alert == "tersedia" ||
                  namateam == "" ||
                  jambooking == "" ||
                  tglbooking == ""
                    ? "disabled"
                    : ""
                }`}
                onClick={PayBooking}
              >
                Booking sekarang
              </button>
              <script></script>

              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
