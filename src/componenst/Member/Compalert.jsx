import React from "react";
import { Link } from "react-router-dom";

export default function Compalert({ pdfurl, statuscode }) {
  return (
    <div>
      <div className="card" style={{ borderRadius: "0px" }}>
        <div className="card-body">
          {statuscode == 201 ? (
            <center>
              <img
                src="menunggu.svg"
                class="img-fluid"
                alt="..."
                style={{ height: "300px" }}
              ></img>
              <h5 className="mt-3 text-danger fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h5>
              <p>
                Status pembayaran member karir anda masih tertunda, silahkan
                melakukan pembayaran dengan metode yang telah di tentukan{" "}
              </p>
              <a
                target="_blank"
                href={pdfurl}
                style={{ textDecoration: "none" }}
              >
                Lihat instruksi pembayaran{" "}
                <i className="fas fa-arrow-right"></i>
              </a>
              <br />
              {/* <button className="btn btn-danger mt-2">
                <i className="fas fa-mony"></i> Ulangi Pembayaran anda
              </button> */}
            </center>
          ) : (
            <center>
              {" "}
              <img
                src="sukses.svg"
                class="img-fluid"
                alt="..."
                style={{ height: "300px" }}
              ></img>
              <h5 className="mt-3 text-danger fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h5>
              <p>
                Status pembayaran anda berhasil, sekarang anda dapat menentukan
                jadwal bermain anda
              </p>
              <Link to="/jadwalmemberkarir" style={{ textDecoration: "none" }}>
                Tentukan jadwal bermain anda{" "}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}
