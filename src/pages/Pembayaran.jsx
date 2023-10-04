import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { imageDb } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Pembayaran({
  tgl,
  harga,
  namateam,
  idlapangan,
  lapangan,
  jambooking,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [norek, setNorek] = useState("");
  const [atasnama, setAtasnam] = useState("");
  const [nameImg, setNameImg] = useState("");
  const [valueimg, setvalueimg] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(true);

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    // console.log(e);
    setvalueimg(e.target.value);
    setNameImg(e.target.files[0].name);
  };

  const handleBooking = () => {
    setLoading(true);
    const imgRef = ref(imageDb, `files/${nameImg}`);
    uploadBytes(imgRef, img);
    console.log(imgRef._location.path_);

    setTimeout(() => {
      getDownloadURL(ref(imageDb, `files/${nameImg}`)).then((url) => {
        console.log("prosess");
        setLoading(false);
        setForm(false);
        addbooking(url);
      });
    }, 5000);
  };

  const addbooking = async (url) => {
    await axios
      .post(urlapi + "Addbooking", {
        nama: localStorage.getItem("nama"),
        iduser: localStorage.getItem("id"),
        id_lapangan: idlapangan,
        lapangan: lapangan,
        tgl: tgl,
        harga: harga,
        team: namateam,
        jam: jambooking,
        bukti: url,
        norek: norek,
        atasnama: atasnama,
      })

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlebtnpopup = () => {
    setForm(true);
    setShow(false);
  };

  return (
    <>
      <Button
        variant="btn w-100"
        onClick={handleShow}
        style={{ backgroundColor: "#2b2e5a", color: "white" }}
      >
        Booking sekerang
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        style={{ height: "500px" }}
      >
        <Offcanvas.Header closeButton>
          <Container>
            <Offcanvas.Title>Pembayaran</Offcanvas.Title>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            {loading ? (
              <div className="text-center" style={{ marginTop: "150px" }}>
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <br></br>
                <label>Loading....</label>
              </div>
            ) : (
              <div>
                {form ? (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        onChange={(e) => setNorek(e.target.value)}
                        placeholder="Nomor rekening anda"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        onChange={(e) => setAtasnam(e.target.value)}
                        placeholder="Atas nama"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="file"
                        onChange={(e) => handleChangeImg(e)}
                      />
                      <Form.Text className="text-muted">
                        Masukan bukti pembayaran anda dengna benar dan jelas
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <textarea
                        className="form-control"
                        placeholder="Keterangan"
                      ></textarea>
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <button
                      className="btn w-100"
                      onClick={() => handleBooking()}
                      style={{ backgroundColor: "#2b2e5a", color: "white" }}
                    >
                      Bayar sekarang
                    </button>
                  </>
                ) : (
                  <>
                    <center>
                      <img
                        src="/sukses.png"
                        className="img-fluid"
                        alt=""
                        style={{ height: "100px" }}
                      ></img>
                      <h5 className="mt-4 text-secondary">
                        <strong>Hei, {localStorage.getItem("nama")} </strong>
                        <br></br>
                        Pembayaran anda berhasil dikirm silahkan menunggu
                        persetujuan pembayaran anda
                      </h5>
                      <a
                        href={"/formbooking/" + idlapangan}
                        className="btn mt-5"
                        style={{ backgroundColor: "#2b2e5a", color: "white" }}
                      >
                        Tutup popup
                      </a>
                    </center>
                  </>
                )}
              </div>
            )}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
