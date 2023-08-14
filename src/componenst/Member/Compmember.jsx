import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Compmember({ props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="card" style={{ borderRadius: "0px", height: "100" }}>
        <div className="card-body">
          <img src="karir.svg" class="img-fluid" alt="..." />
          <h4 className="mt-4 text-danger text-left fw-bold">
            Apa itu member karir ?
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quam eaque, autem quis, harum quaerat veniam labore dolore nulla
            similique cumque esse quasi repellendus illum placeat saepe atque id
            itaque?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quam eaque, autem quis, harum quaerat veniam labore dolore nulla
            similique cumque esse quasi repellendus illum placeat saepe atque id
            itaque?
          </p>

          <Button variant="danger" className="w-100" onClick={handleShow}>
            Daftar member karir <i className="fas fa-futbol"></i>
          </Button>

          <Modal
            {...props}
            show={show}
            onHide={handleClose}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Member karir</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                omnis aspernatur, exercitationem asperiores, reiciendis
                cupiditate amet aperiam eveniet quam impedit, dolores facere
                libero ab quaerat consectetur earum sapiente beatae.
                Consectetur!
              </p>
              <div className="d-flex justify-content-between">
                <h4 className="text-danger">Rp 200.000</h4>
                <div>
                  <button className="btn btn-danger">-</button> 1{"  "}
                  <button className="btn btn-danger">+</button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* <button className="btn btn-danger w-100">
            Daftar member karir <i className="fas fa-futbol"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
}
