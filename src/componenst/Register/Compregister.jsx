import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Compregister() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noktp, setNoktp] = useState("");
  const [pass, setPass] = useState("");
  const [ulangipass, setUlangipass] = useState("");
  const [alertpass, setAlertpass] = useState(false);

  const handlePass = (e) => {
    if (e == pass) {
      setAlertpass(false);
      setUlangipass(e);
    } else {
      setAlertpass(true);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mt-5">
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
            <div className="form-group">
              <label class="form-label">Nama</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setNama(e.target.value)}
              ></input>
            </div>
            <div className="form-group mt-4">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
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
                <button className="btn btn-danger w-100 mt-4">
                  <i className="fa fa-user"></i> Daftar sekarang
                </button>
              </>
            )}

            <hr />
            <p className="text-danger mt-4 text-center">
              Sudah punya akun ? <Link to="/login">Login sekarang</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
