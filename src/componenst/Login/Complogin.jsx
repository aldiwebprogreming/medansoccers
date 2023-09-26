import React from "react";

import { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Complogin() {
  const [nama, setNama] = useState("");

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setNama(result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          {nama == "" ? (
            <div className="mt-5">
              <div
                className="card-body"
                style={{ marginTop: "100px", height: "100%" }}
              >
                <h4 className="text-center">
                  Login <br></br>
                  <strong className="text-danger">Medan Mini Soccer </strong>
                </h4>
                <p className="text-center text-secondary mt-3">
                  Masuka email dan password anda dengan benar
                </p>
                <div className="form-group">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  ></input>
                </div>

                <div className="form-group mt-4">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="*******"
                  ></input>
                </div>

                <button className="btn btn-danger  w-100 mt-4">
                  <i className="fa fa-user"></i> Login sekarang
                </button>

                <hr />
                <p className="text-danger mt-4 text-center">
                  Belum punya akun ? <Link to="/register">Daftar sekarang</Link>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <img
                src="loginsuccess.png"
                class="img-fluid"
                alt="loginsukses"
                style={{}}
              />
              <h5 className="text-center text-success fw-bold">Hello {nama}</h5>
              <p className="text-center text-success">
                Anda berhasil login dengan akun google
              </p>
              <center>
                <Link to="/home" className="btn btn-danger">
                  <i className="fa fa-home"></i> Go Home
                </Link>
              </center>
            </div>
          )}
        </div>

        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}
