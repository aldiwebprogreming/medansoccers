import React, { useEffect } from "react";
import Navbar from "../componenst/Navbar";
import Header from "../componenst/Header";
import CardMenu from "../componenst/CardMenu";
// import Content from "../componenst/Content";
import Vanue from "../componenst/Vanue";
import Comteam from "../componenst/Comteam";
import axios from "axios";
// import Footer from "../componenst/Footer";

export default function Home() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const updatestatusmain = async () => {
    await axios
      .post(urlapi + "Updatestatusmain", {
        id_user: localStorage.getItem("id"),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    updatestatusmain();
  });

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
      {/* <Footer /> */}
    </div>
  );
}
