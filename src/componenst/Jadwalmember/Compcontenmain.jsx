import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Compcontenmain() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [karir, setKarir] = useState([]);
  const [sisa, setSisa] = useState(0);

  const getKarir = async () => {
    try {
      const response = await axios.get(
        urlapi + "AddMemberKarir?id_user=" + localStorage.getItem("id")
      );
      setKarir(response.data);
      setSisa(response.data.sisa_bermain);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getKarir();
  }, []);

  return <div></div>;
}
