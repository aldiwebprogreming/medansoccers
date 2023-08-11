import React from "react";
import Compheader from "./Compheader";
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
            <div className="card shadow">
              <div className="card-header">
                <p className="text-danger text-center">Login Medan soccers</p>
              </div>
              <div className="card-body">
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
                  <i className="fa fa-user"></i> Login Yukk
                </button>

                <button
                  onClick={loginGoogle}
                  className="btn btn-danger  w-100 mt-2"
                >
                  <i class="fa-brands fa-google"></i> Login dengan akun google
                </button>
                <hr />
                <p className="text-danger mt-4 text-center">
                  Belum punya akun ? Daftar sekarang
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
