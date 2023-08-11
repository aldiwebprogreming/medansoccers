import React from "react";
import Complogin from "../componenst/Login/Complogin";
import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Login/Compheader";

export default function Login() {
  return (
    <div>
      <Navbar judul="Login" aicon="true" />
      <Compheader />
      <Complogin />
    </div>
  );
}
