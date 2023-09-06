import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Compmain({ jml_main }) {
  const urlapi = process.env.REACT_APP_BASE_URL;

  const notify = () =>
    toast.error(
      "Mohon maaf jam booking member karir anda sudah habis, cobalah di hari yang akan datang",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [btnmain, setBtnmain] = useState(true);

  const [karir, setKarir] = useState([]);
  const [sisa, setSisa] = useState(0);
  const [mainhariini, setMainhariini] = useState(false);
  const [main, setMain] = useState([]);

  const getKarir = async () => {
    try {
      const response = await axios.get(
        urlapi +
          "AddMemberKarir?id_user=" +
          localStorage.getItem("id") +
          "&&status=200"
      );
      setKarir(response.data);
      setSisa(response.data.sisa_bermain);
    } catch (error) {
      // console.log(error.message);
      navigate("/member");
    }
  };

  const getMain = async () => {
    try {
      const response = await axios.get(
        urlapi + "main?id_user=" + localStorage.getItem("id")
      );
      // console.log(response.data.data);
      setMainhariini(response.data.tersedia);
      setMain(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Addmain = async () => {
    await axios
      .post(urlapi + "Main", {
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        id_user: localStorage.getItem("id"),
        jml_main: jml_main,
      })
      .then((response) => {
        console.log(response.data);
        setShow(false);
        setSisa(response.data.sisa_bermain);
        setMainhariini(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getKarir();
    getMain();
    const date = new Date();
    const jam = date.getHours();

    if (jam) {
      setBtnmain(true);
    } else {
      setBtnmain(false);
    }
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ position: "relative", bottom: "130px" }}
      >
        <div className="card shadow" style={{ height: "250px" }}>
          <div className="card-body">
            <div class="d-flex justify-content-between">
              <p className="text-danger fw-bold">Berlangganan</p>
              <p className="text-danger fw-bold">
                <i className="fas fa-calendar-days"></i> {karir.waktu_member}{" "}
                Bulan
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <small className="text-danger">
                <center>Tanggal mulai : {karir.tgl_mulai}</center>
              </small>

              <small className="text-danger">
                <center>Tanggal berakhir : {karir.tgl_selesai}</center>
              </small>
            </div>

            <hr />
            <div className="row mb-5">
              <div className="col-sm-6 col-6">
                <div className="card bg-danger text-white">
                  <div className="card-body">
                    Slot Bermain
                    {karir.jml_bermain == null ? (
                      <>
                        <h4>
                          0 <i className="fas fa-futbol"></i>
                        </h4>
                      </>
                    ) : (
                      <>
                        <h4>
                          {karir.jml_bermain} <i className="fas fa-futbol"></i>
                        </h4>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-6">
                <div className="card bg-danger text-white">
                  <div className="card-body">
                    Sisa Bermain
                    <h4>
                      {sisa} <i className="fas fa-futbol"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sisa == 0 ? (
        <div className="container text-center">
          <img
            src="slotkosong.svg"
            className="img-fluid"
            alt="Responsive image"
            style={{ height: "250px" }}
          ></img>
          <h4 className="fw-bold text-danger">Uppss....</h4>
          <div className="container">
            {" "}
            <p className="text-secondary">
              Untuk saat ini slot bermain anda kosong, cobalah untuk melakukan
              pembelian slot member karir anda.
            </p>
            <Link to="/member" className="btn btn-danger w-100 mb-5">
              Beli slot bermain anda <i className="fas fa-futbol"></i>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {mainhariini ? (
            <div
              className="container"
              style={{ position: "relative", bottom: "70px" }}
            >
              <img
                src="slide22.svg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
              <h4 className="text-center text-danger mt-3 fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h4>
              <p className="text-center text-danger">
                Hari ini anda berhasil melakukan booking main.<br></br> Kami
                mengharapkan anda datang pada hari ini <br></br>
                <hr />
                <div class="d-flex justify-content-center">
                  <Link
                    to="/home"
                    className=""
                    style={{ marginRight: "5px", textDecoration: "none" }}
                  >
                    <i className="fas fa-home"></i> Back to Home
                  </Link>
                  <Link
                    to="/listbookingkarir"
                    className=""
                    style={{ textDecoration: "none", marginLeft: "5px" }}
                  >
                    Go to list booking <i className="fas fa-futbol"></i>
                  </Link>
                </div>
              </p>
            </div>
          ) : (
            <div
              className="container"
              style={{ position: "relative", bottom: "70px" }}
            >
              {/* <p className="text-danger">Tentukan main anda hari ini </p> */}

              <img src="main.png" className="img-fluid" alt="..."></img>
              <p className="text-center text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium minus cum nemo molestias perspiciatis? Voluptas,
                esse? Placeat, magni veniam deserunt ex quibusdam, adipisci
                dolorum quas expedita aperiam repellendus velit facere!
              </p>

              {btnmain ? (
                <Button variant="danger" className="w-100" onClick={handleShow}>
                  Mulai bermain hari ini
                </Button>
              ) : (
                <Button variant="danger" className="w-100" onClick={notify}>
                  Mulai bermain hari ini
                </Button>
              )}
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />

              <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="text-center">
                  <h5 className="fw-bold text-danger text-center">
                    Hay, {localStorage.getItem("nama")}
                  </h5>
                  Apakah anda ingin bermain hari ini ?
                </Modal.Body>

                <div className="d-flex justify-content-between container my-3">
                  <Button
                    variant="secondary"
                    className="w-100 mx-2"
                    onClick={handleClose}
                  >
                    No
                  </Button>
                  <Button
                    variant="danger"
                    className="w-100 mx-2"
                    onClick={Addmain}
                  >
                    Yes
                  </Button>
                </div>
              </Modal>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
