import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Logingoogle() {
  const [nama, setNama] = useState("");
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [profil, setProfil] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setNama(result.user.displayName);
        localStorage.setItem("nama", result.user.displayName);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("id", result.user.uid);
        if (profil) {
          navigate("/home");
        } else {
          navigate("/profil");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cekProfil = async (iduser) => {
    try {
      const response = await axios.get(urlapi + "profil?id=" + iduser);
      if (response.data) {
        setProfil(true);
      }
    } catch (error) {
      setProfil(false);
    }
  };

  useEffect(() => {
    cekProfil(localStorage.getItem("id"));
  }, []);
  return (
    <div>
      {nama}
      <button className="btn btn-danger" onClick={login}>
        <i className="fab fa-google"></i> Yuuk login dengna akun google anda
      </button>
    </div>
  );
}
