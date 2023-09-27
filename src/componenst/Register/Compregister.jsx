import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Compregister() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noktp, setNoktp] = useState("");
  const [pass, setPass] = useState("");
  const [ulangipass, setUlangipass] = useState("");
  const [alertpass, setAlertpass] = useState(false);
  const [formverifikasi, setFormverifikasi] = useState(false);
  const [alertkode, setAlertkode] = useState();
  const form = useRef();
  // const [kodeveri, setKodeveri] = useState("");

  const kode = Math.floor(Math.random() * 10000);

  const handlePass = (e) => {
    setUlangipass(e);
    if (e == pass) {
      setAlertpass(false);
    } else {
      setAlertpass(true);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    await axios
      .post(urlapi + "User", {
        nama: nama,
        email: email,
        noktp: noktp,
        pass: pass,
        kodeveri: kode,
      })
      .then((response) => {
        setNama("");
        setEmail("");
        setPass("");
        setNoktp("");
        setUlangipass("");

        // menjalakan aksi send email
        sendEmail();
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_oq4sklv",
        "template_s9u31ap",
        form.current,
        "s2k_8LATBOCtD0pAL"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setFormverifikasi(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const cekCode = async (val) => {
    const length = val.length;
    if (length == 4) {
      try {
        const response = await axios.get(urlapi + "Cekkode?kode=" + val);
        if (response.data.status == "benar") {
          updateStatus(val);
        }
      } catch (error) {
        setAlertkode(false);
      }
    } else if (val == "") {
      setAlertkode();
    }
  };

  const updateStatus = async (val) => {
    await axios
      .post(urlapi + "Cekkode", {
        kode: val,
      })

      .then((response) => {
        // console.log(response.data);
        setAlertkode(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="mt-5">
          {formverifikasi ? (
            <>
              <div
                className="text-center"
                style={{ marginTop: "100px", marginBottom: "100px" }}
              >
                {alertkode ? (
                  <>
                    <h4 className="text-center fw-bold">Verifikasi Sukses</h4>
                    <img
                      src="/otpsukses.png"
                      class="img-fluid"
                      alt="Responsive image"
                      style={{ height: "300px" }}
                    ></img>
                    <p className="mt-2">
                      Verifikasi anda berhasil, silahkan login sekarang
                    </p>
                    <Link to="/login" className="btn btn-danger">
                      Login sekarang
                    </Link>
                  </>
                ) : (
                  <>
                    <h4 className="text-center fw-bold">Verifikasi Kode</h4>
                    <img
                      src="/otp.png"
                      class="img-fluid"
                      alt="Responsive image"
                      style={{ height: "300px" }}
                    ></img>

                    <p className="text-secondary">
                      Masukan kode verifikasi anda dengan benar
                      <br />
                      Cek akun email yang telah anda daftarkan untuk mendapatkan
                      kode verifikasi
                    </p>
                    <p></p>
                    <center>
                      <input
                        type="text"
                        className="form-control text-center fw-bold"
                        placeholder="Kode verifikasi"
                        style={{ width: "200px" }}
                        onChange={(e) => cekCode(e.target.value)}
                      ></input>
                      <p
                        className={`fw-bold text-danger ${
                          alertkode == false ? "" : "d-none"
                        }`}
                      >
                        Kode verifikasi salah
                      </p>
                    </center>
                    <p className="mt-3 text-secondary">
                      Belum menerima kode verifiaksi ? <br />
                      silahkan kirim ulang
                    </p>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <form ref={form} onSubmit={addData}>
                <div
                  className="card-body"
                  style={{ marginTop: "100px", height: "100%" }}
                >
                  <h4 className="text-center">
                    Register <br></br>
                    <strong className="text-danger">Medan Mini Soccer </strong>
                  </h4>
                  <p className="text-center text-secondary mt-3">
                    Masukan data anda dengan benar
                  </p>

                  <input type="hidden" name="kode" value={kode}></input>
                  <div className="form-group">
                    <label class="form-label">Nama</label>
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                    ></input>
                  </div>
                  <div className="form-group mt-4">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>

                  <div className="form-group mt-4">
                    <label class="form-label">NO KTP</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="2253343434322"
                      onChange={(e) => setNoktp(e.target.value)}
                      value={noktp}
                    ></input>
                  </div>

                  <div className="form-group mt-4">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="*******"
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                    ></input>
                  </div>

                  <div className="form-group mt-4">
                    <label class="form-label">Ulangi Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="*******"
                      onChange={(e) => handlePass(e.target.value)}
                      value={ulangipass}
                    ></input>
                  </div>
                  <p className={`text-danger ${alertpass ? "" : "d-none"}`}>
                    Password belum sama
                  </p>

                  {nama == "" ||
                  email == "" ||
                  noktp == "" ||
                  pass == "" ||
                  ulangipass == "" ||
                  alertpass == true ? (
                    <>
                      {" "}
                      <button className="btn btn-danger w-100 mt-4" disabled>
                        <i className="fa fa-user"></i> Daftar sekarang
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="btn btn-danger w-100 mt-4"
                      >
                        <i className="fa fa-user"></i> Daftar sekarang
                      </button>
                    </>
                  )}

                  <hr />
                  <p className="text-danger mt-4 text-center">
                    Sudah punya akun ? <Link to="/login">Login sekarang</Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
