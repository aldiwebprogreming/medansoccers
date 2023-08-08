import React from "react";
import Navbar from "../componenst/Navbar";
import Header from "../componenst/Header";
import CardMenu from "../componenst/CardMenu";
// import Content from "../componenst/Content";
import Vanue from "../componenst/Vanue";
import Comteam from "../componenst/Comteam";

export default function Home() {
  return (
    <div>
      <Navbar judul="Medansoccers" aicon="false" />
      <Header />
      <CardMenu />
      <div className="card">
        <div className="card-body">
          <Vanue />
          <hr />
          <Comteam />
        </div>
      </div>
    </div>
  );
}
