import React, { useEffect, useState } from "react";
import Navbar from "../componenst/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Loadketentuanbooking from "../skeleton/Loadketentuanbooking";
import Loadjambooking from "../skeleton/Loadjambooking";
import Loadformbooking from "../skeleton/loadformbooking";
import Pembayaran from "./Pembayaran";
import Databookinglapangan from "./Databookinglapangan";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Datalapangan from "./Datalapangan";

export default function Formbooking() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const { idlapangan } = useParams();
  const [jambooking, setJambooking] = useState("");
  const [tglbooking, setTglbooking] = useState("");
  const [namateam, setNamateam] = useState("");
  const [totalHarga, setTotalharga] = useState("");
  const [namaLapangan, setTNamalapangan] = useState("");
  const [wa, setWa] = useState("");
  const [alert, setAlert] = useState("");
  const [jammain, setJammain] = useState([]);
  const [idjambooking, setIdjambooking] = useState(0);
  const [cekbookinglap, setCekbookinglap] = useState([]);
  const [load, setLoad] = useState(false);
  const [loadjam, setLoadjam] = useState(false);
  const [alerttglsudahlewat, setAlerttglsudahlewat] = useState(false);
  const [hiddenbutton, setHiddenbutton] = useState(true);
  const [pagebooking, setPagebooking] = useState(true);
  const [pagedatabooking, setPagedatabooking] = useState(false);
  const [pagejam, setPagajam] = useState(true);
  const [lapanganlainya, setLapanganlainya] = useState([]);

  const resvonsive = {
    0: {
      items: 1.2,
    },
    600: {
      items: 1.2,
    },
    1000: {
      items: 1.2,
    },
  };

  const date = new Date();
  let tgl = new Date();
  let format_tgl =
    tgl.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + tgl.getDate()).slice(-2);

  const [tglsrc, setTglsrc] = useState(format_tgl);
  const [tglsekarang, setTglsekarang] = useState(format_tgl);

  const notify = () =>
    toast.success("Booking lapangan anda berhasil !", {
      position: toast.POSITION.TOP_CENTER,
    });

  const notifyCekbooking = () => {
    toast.error("Jam booking sudah di gunakan !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const getLapangan = async () => {
    try {
      const response = await axios.get(urlapi + "Lapangan?id=" + idlapangan);
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
      .post(urlapi + "Cekbooking", {
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
      .post(urlapi + "Cekbooking", {
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
      .post(urlapi + "pay", {
        total: totalHarga,
        team: namateam,
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
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
        .post(urlapi + "Addbooking", {
          jam: idjambooking,
          tgl: tglsrc,
          team: namateam,
          id_lapangan: idlapangan,
          kode_status: result.status_code,
        })
        .then((response) => {
          setJambooking("Pilih jam booking");
          setNamateam("");
          setTglbooking("");
          notify();
          cekBookinglapangan(tglsrc);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const handleButtonbooking = async () => {
    try {
      const response = await axios.get(
        urlapi +
          "Cekbookinglapangan2?idlap=" +
          idlapangan +
          "&tgl=" +
          tglsrc +
          "&idjam=" +
          idjambooking
      );
      if (response.data.status == true) {
        notifyCekbooking();
      } else {
        PayBooking();
      }
    } catch (error) {}
  };

  const cekBookinglapangan = async (tgl) => {
    try {
      const response = await axios.get(
        urlapi + "Cekbookinglapangan?id_lap=" + idlapangan + "&tgl=" + tgl
      );
      setCekbookinglap(response.data);
      // console.log(response.data);
    } catch (error) {}
  };

  const getJammain = async (tgl) => {
    try {
      const response = await axios.get(
        urlapi + "Jammain?tgl=" + tgl + "&&lapangan=" + idlapangan
      );
      setJammain(response.data);
      console.log(tglsekarang);
      setLoad(true);

      // console.log(response.data);
    } catch (error) {}
  };

  const handleTglbooking = (tgl) => {
    setTglsrc(tgl);
    getJammain(tgl);
    cekBookinglapangan(tgl);
    if (tgl < tglsekarang) {
      setAlerttglsudahlewat(true);
    } else {
      setAlerttglsudahlewat(false);
    }
  };

  const handleJambooking = (id, harga) => {
    setIdjambooking(id);
    cekdataBooking(id);
    setTotalharga(harga);
  };

  const cekdataBooking = async (id) => {
    try {
      const response = await axios.get(
        urlapi +
          "Cekbookinglapangan2?idlap=" +
          idlapangan +
          "&tgl=" +
          tglsrc +
          "&idjam=" +
          id
      );
      if (response.data.status == true) {
        setHiddenbutton(false);
        notifyCekbooking();
      } else {
        setHiddenbutton(true);
      }
    } catch (error) {}
  };

  const Time = new Date();
  const hour = ("0" + Time.getHours()).slice(-2);
  const menit = Time.getMinutes();
  const jam = hour + "." + menit;

  const showBooking = () => {
    setPagebooking(true);
    setPagedatabooking(false);
  };

  const showDatabooking = () => {
    setPagebooking(false);
    setPagedatabooking(true);
  };

  const formatrupiah = (numb) => {
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");
    return rupiah;
  };

  const getlapanganlainya = async () => {
    const response = await axios.get(
      urlapi + "Lapanganlainya?lap=" + idlapangan
    );
    try {
      setLapanganlainya(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      getLapangan();
      getJammain(tglsekarang);
      cekBookinglapangan(tglsrc);
      getlapanganlainya();
    }, 300);
  }, []);

  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <div className="card container mt-5">
        {load ? (
          <div className="card my-3 shadow" style={{ border: "none" }}>
            <div className="card-body">
              <p className="fw-bold">Kententuan booking</p>
              <p className="text-secondary">
                {" "}
                Ketentuan dalam membooking lapangan adalah harus mengatur jam
                booking seefesien mungkin, Pastikan team dan lawan anda dapat
                hadir tepak waktu, dan harus membayar uang booking sesuai yang
                tertera di aplikasi
              </p>
              <OwlCarousel
                className="owl-theme"
                loop
                margin={4}
                nav={false}
                responsive={resvonsive}
                dotsEach
                autoplay
              >
                <img
                  src="/img/bennerbooking.png"
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "5px" }}
                ></img>
                <img
                  src="/img/dp.png"
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "5px" }}
                ></img>
              </OwlCarousel>
            </div>
          </div>
        ) : (
          <Loadketentuanbooking />
        )}

        {load ? (
          <div className="card my-3 shadow" style={{ border: "none" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p
                  className={`fw-bold ${pagebooking ? "text-primary" : ""}`}
                  onClick={() => showBooking()}
                  style={{ cursor: "pointer" }}
                >
                  <i className="far fa-calendar-days"></i> Jadwal Booking
                </p>

                <p
                  className={`fw-bold ${pagedatabooking ? "text-primary" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => showDatabooking()}
                >
                  <i className="far fa-futbol"></i> Lapangan Lainya
                </p>
              </div>

              <div className={pagedatabooking ? "" : "d-none"}>
                {/* <Databookinglapangan /> */}
                <Datalapangan />
              </div>

              <div className={pagebooking ? "" : "d-none"}>
                <input
                  className="form-control"
                  value={tglsrc}
                  type="date"
                  onChange={(e) => handleTglbooking(e.target.value)}
                  min="2023.09-06"
                />
                <hr />

                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <strong> {namaLapangan}</strong>
                      <i
                        className="fas fa-circle-chevron-down"
                        onClick={() => setPagajam(!pagejam)}
                      ></i>
                    </div>
                  </div>
                  <div className={pagejam ? "card-body" : "d-none"}>
                    <p
                      className={
                        alerttglsudahlewat
                          ? "text-center text-secondary"
                          : "d-none"
                      }
                      style={{ marginTop: "100px", marginBottom: "100px" }}
                    >
                      <strong>Mohon Maaf {localStorage.getItem("nama")}</strong>
                      <br />
                      Tanggal yang ada pilih sudah lewat
                    </p>

                    <p
                      className={
                        jammain == ""
                          ? "text-center my-5 text-danger"
                          : "d-none"
                      }
                    >
                      Jam Booking <strong>{namaLapangan}</strong> untuk saat ini
                      belum tersedia, cobalah atur dengan tanggal yang lain
                    </p>
                    {jammain.map((jm, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            jam > jm.jam_mulai && tglsrc == tglsekarang
                              ? "d-none"
                              : tglsrc < tglsekarang
                              ? "d-none"
                              : ""
                          }
                        >
                          <div
                            className={
                              idjambooking == jm.id
                                ? "card mt-2 border-primary"
                                : "card mt-2"
                            }
                            disabled
                            onClick={() =>
                              handleJambooking(jm.id, jm.harga_diskon)
                            }
                            key={jm.id}
                          >
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <p>{jm.jam_mulai} WIB</p>
                                <p className="fw-bold text-center">
                                  -
                                  {cekbookinglap.map((bk, index) => {
                                    return (
                                      <div key={index}>
                                        {bk.jam_mulai == jm.jam_mulai &&
                                        bk.status_pembayaran == "200" ? (
                                          <>
                                            <label className="text-danger">
                                              Booked
                                            </label>
                                            <br></br>
                                            <small>
                                              {localStorage.getItem("id") ==
                                              bk.iduser ? (
                                                <small>
                                                  {localStorage.getItem("nama")}
                                                </small>
                                              ) : (
                                                ""
                                              )}
                                            </small>
                                          </>
                                        ) : localStorage.getItem("id") ==
                                            bk.iduser &&
                                          bk.jam_mulai == jm.jam_mulai &&
                                          bk.status_pembayaran == "201" ? (
                                          <small className="text-danger">
                                            Menunggu Approve
                                          </small>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    );
                                  })}
                                </p>

                                <p>{jm.jam_berakhir} WIB</p>

                                <div
                                  className="form-check form-check-inline"
                                  style={{ display: "none" }}
                                >
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={jm.id}
                                    id="flexCheckDefault"
                                  />
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div
                                  className={
                                    jm.harga == jm.harga_diskon ? "d-none" : ""
                                  }
                                >
                                  <small className="fw-bold text-secondary">
                                    <s>{formatrupiah(jm.harga)}</s>
                                  </small>{" "}
                                </div>

                                <div
                                  className={
                                    jm.harga == jm.harga_diskon ? "d-none" : ""
                                  }
                                >
                                  <span
                                    className={
                                      jm.time == "Promo"
                                        ? "badge text-bg-primary"
                                        : jm.time == "Hot"
                                        ? "badge text-bg-danger"
                                        : "badge text-bg-success"
                                    }
                                    style={{ width: "50px" }}
                                  >
                                    {jm.time}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                <span className="badge text-bg-dark fw-bold">
                                  {formatrupiah(jm.harga_diskon)}
                                </span>{" "}
                                <span className="badge text-bg-dark fw-bold">
                                  SOFT OPENING
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loadjambooking />
        )}
        {/* <div className={pagebooking == false ? "d-none" : ""}>
          <div className="container">
            <p className="mt-2 text-primary fw-bold">Lapangan lainya</p>
            <hr />
            {lapanganlainya.map((lpl, index) => {
              return (
                <div key={lpl.id}>
                  <>
                    <a
                      href={"/formbooking/" + lpl.id}
                      style={{ textDecoration: "none" }}
                      key={lpl.id}
                    >
                      <div
                        className="card cardBooking shadow mt-3"
                        key={lpl.id}
                      >
                        <div className="row g-0">
                          <div className="col-6 col-md-5">
                            <img
                              src={lpl.gambar}
                              className="img-fluid"
                              alt="Responsive image"
                            />
                          </div>
                          <div className="col-6 col-md-7">
                            <div className="card-body d-flex flex-column">
                              <div className="h-100">
                                <label className="fw-bold text-secondary">
                                  {lpl.lapangan}
                                </label>
                                <br></br>
                                <p className="text-secondary">
                                  {" "}
                                  {lpl.pasilitas}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </>
                </div>
              );
            })}
            <br />
          </div>
        </div> */}
        {load ? (
          <div className={pagebooking ? "" : "d-none"}>
            <div
              className={`card my-3 shadow ${
                alerttglsudahlewat ? "d-none" : ""
              }`}
              style={{ border: "none" }}
            >
              <div className="card-body">
                <p className="fw-bold">Form Booking </p>

                <p>
                  Pembayaran booking lapangan hanya dapat di lakukan dengan
                  <strong> BANK TRANSFER</strong> dengan nomor rekening tujuan
                  <strong>
                    {" "}
                    REK BCA : 6475383951 a/n Pendy Or Handoko,{" "}
                  </strong>{" "}
                  Pembayaran Booking Lapangan <strong>Wajib DP 50% </strong>dari
                  Harga yang sudah di tentukan, dengan syarat pelunasan{" "}
                  <strong>(H-1) 1 hari sebelum jadwal main</strong>
                </p>
                <div className="row mb-3 text-secondary">
                  <div className="form-group mt-3 col-md-6">
                    <label>Lapangan</label>
                    <input
                      type="text"
                      value={namaLapangan}
                      className="form-control mt-3 fw-bold"
                    />
                  </div>
                  <div className="form-group  mt-3 col-md-6">
                    <label>Harga</label>
                    <br />
                    <input
                      type="text"
                      value={totalHarga}
                      placeholder="xxxxxxx"
                      className="form-control mt-3 fw-bold "
                    />
                  </div>
                </div>

                <div className="row mb-3 text-secondary">
                  <div className=" col-md-6 form-group mt-3 text-secondary">
                    <label className="mb-2">Nama Team</label>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder="Sinar FC"
                      value={namateam}
                      onChange={(e) => setNamateam(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6 mt-3 text-secondary">
                    <label className="mb-2">No Whatsapp</label>
                    <input
                      type="number"
                      className="form-control"
                      required=""
                      placeholder="08xxxxxxxx"
                      value={wa}
                      onChange={(e) => setWa(e.target.value)}
                    />
                    <small
                      className="text-primary"
                      style={{ fontSize: "10px" }}
                    >
                      Masukan nomor Whatsapp anda dengan benar untuk mendapatkan
                      notifikasi pembayaran anda
                    </small>
                  </div>
                </div>

                <div className="form-group mt-3">
                  {hiddenbutton == true &&
                  namateam != "" &&
                  wa != "" &&
                  totalHarga != "" ? (
                    <>
                      <Pembayaran
                        idlapangan={idlapangan}
                        lapangan={namaLapangan}
                        harga={totalHarga}
                        namateam={namateam}
                        jambooking={idjambooking}
                        wa={wa}
                        tgl={tglsrc}
                      />
                    </>
                  ) : (
                    <button
                      className="btn  w-100 rounded-pill "
                      disabled
                      style={{ backgroundColor: "#2b2e5a", color: "white" }}
                    >
                      Booking sekarang
                    </button>
                  )}

                  {/* <button
                    className={`btn btn-danger w-100 ${
                      alert == "tersedia" || namateam == "" ? "disabled" : ""
                    }`}
                    onClick={handleButtonbooking}
                  >
                    Booking sekarang
                  </button> */}
                  <script></script>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loadformbooking />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
