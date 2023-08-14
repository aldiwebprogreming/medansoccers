import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logingoogle() {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setNama(result.user.displayName);
        localStorage.setItem("nama", result.user.displayName);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("id", result.user.uid);
        navigate("/profil");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {nama}
      <button className="btn btn-danger" onClick={login}>
        <i className="fab fa-google"></i> Yuuk login dengna akun google anda
      </button>
    </div>
  );
}
