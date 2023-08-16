import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

export default function Compmain({ jml_main }) {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Addmain = async () => {
    await axios
      .post(urlapi + "Main", {
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        id_user: localStorage.getItem("id"),
        jml_main: jml_main,
      })
      .then((response) => {
        console.log(response);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div
        className="container"
        style={{ position: "relative", bottom: "70px" }}
      >
        {/* <p className="text-danger">Tentukan main anda hari ini </p> */}

        <img src="main.png" class="img-fluid" alt="..."></img>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          minus cum nemo molestias perspiciatis? Voluptas, esse? Placeat, magni
          veniam deserunt ex quibusdam, adipisci dolorum quas expedita aperiam
          repellendus velit facere!
        </p>

        <Button variant="danger" className="w-100" onClick={handleShow}>
          Mulai bermain hari ini
        </Button>

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
            <Button variant="danger" className="w-100 mx-2" onClick={Addmain}>
              Yes
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
