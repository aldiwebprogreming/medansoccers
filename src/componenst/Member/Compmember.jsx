import axios from "axios";
import React, { useEffect } from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Compalert from "./Compalert";

export default function Compmember({ props }) {
  const [show, setShow] = useState(false);
  const [awal, setAwal] = useState(true);
  const [datauser, setDatauser] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(200);

  const tambah = () => {
    setQty(qty + 1);
  };
  const kurang = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const PayMember = async () => {
    await axios
      .post(urlapi + "PayMember", {
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        total: total * qty,
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          window.snap.pay(token, {
            onSuccess: (result) => {
              setShow(false);
              // console.log(result);
              addMemberkarir(result);
              getMember();
              setAwal(false);
            },
            onPending: (result) => {
              setShow(false);
              addMemberkarir(result);
              getMember();
            },
            onError: (result) => {
              console.log(result.status_message);
              setShow(false);
            },
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addMemberkarir = async (result) => {
    await axios
      .post(urlapi + "AddMemberKarir", {
        nama: localStorage.getItem("nama"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        waktu_member: qty,
        total_harga: qty * total,
        status_pembayaran: result.status_code,
        pdf_url: result.pdf_url,
      })
      .then((response) => {
        console.log(response);
        setShow(false);
        setAwal(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getMember = async () => {
    try {
      const response = await axios.get(
        urlapi + "AddMemberKarir?id_user=" + localStorage.getItem("id")
      );
      setAwal(false);
      setDatauser(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Renderalert = () => {
    if (datauser.status_pembayaran == 200) {
      return <Compalert statuscode="200" pdfurl={datauser.pdf_url} />;
    } else {
      return <Compalert statuscode="201" pdfurl={datauser.pdf_url} />;
    }
  };

  useEffect(() => {
    getMember();
  });

  return (
    <div>
      {awal ? (
        <div>
          {" "}
          <div className="card" style={{ borderRadius: "0px", height: "100" }}>
            <div className="card-body">
              <img src="karir.svg" class="img-fluid" alt="..." />
              <h4 className="mt-4 text-danger text-left fw-bold">
                Apa itu member karir ?
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quam eaque, autem quis, harum quaerat veniam labore
                dolore nulla similique cumque esse quasi repellendus illum
                placeat saepe atque id itaque?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quam eaque, autem quis, harum quaerat veniam labore
                dolore nulla similique cumque esse quasi repellendus illum
                placeat saepe atque id itaque?
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo omnis aspernatur, exercitationem asperiores, reiciendis
                    cupiditate amet aperiam eveniet quam impedit, dolores facere
                    libero ab quaerat consectetur earum sapiente beatae.
                    Consectetur!
                  </p>
                  <div className="d-flex justify-content-between">
                    <h4 className="text-danger">Rp 200.000</h4>
                    <div>
                      <button onClick={kurang} className="btn btn-danger">
                        -
                      </button>{" "}
                      <label className="fw-bold">{qty} Bulan</label>
                      {"  "}
                      <button onClick={tambah} className="btn btn-danger">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <p className="fw-bold">Total Pembayaran :</p>
                    <p className="fw-bold">
                      Rp {total * qty}
                      {".000"}
                    </p>
                  </div>
                  <p className="">
                    Dapatkan potongan harga dengan memasukan kode voucher
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kode voucher"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    onClick={PayMember}
                    className="w-100"
                    variant="primary"
                  >
                    Pay Member Karir <i className="fas fa-receipt"></i>
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* <button className="btn btn-danger w-100">
            Daftar member karir <i className="fas fa-futbol"></i>
          </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Renderalert />
        </div>
      )}
    </div>
  );
}
