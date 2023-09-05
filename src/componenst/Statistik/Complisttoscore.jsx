import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Complistopscore() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [score, setScore] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        urlapi + "Topscore?id_user=" + localStorage.getItem("id")
      );

      setScore(response.data);
    } catch (error) {
      //   console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="mt-3 row">
        {score.map((ls) => {
          return (
            <div className="row" key={ls.id}>
              <div className="col-md-4 col-4">
                <h5>
                  <i className="far fa-circle-user text-danger fw-bold"></i>
                </h5>

                <small className="text-secondary fw-bold"> {ls.nama}</small>
              </div>

              <div className="col-md-4 col-4 text-center">
                <h5 className="text-danger fw-bold">
                  10 <i className="far fa-user"></i>
                </h5>
                <p className="text-secondary fw-bold">Play</p>
              </div>

              <div className="col-md-4 col-4 text-left">
                <h5 className="text-danger fw-bold">
                  {ls.total} <i className="far fa-user"></i>
                </h5>
                <p className="text-secondary fw-bold">Goal</p>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
