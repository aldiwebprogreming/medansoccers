import React from "react";
import Navbar from "../componenst/Navbar";
// import Header from "../componenst/Header";
import Compheader from "../componenst/Profilanda/Compheader";
import Compmain from "../componenst/Profilanda/Compmain";

export default function Profilanda() {
  return (
    <div>
      <Navbar judul="Profil anda" aicon="true" />
      {/* <Compheader /> */}
      <Compmain />
    </div>
  );
}
