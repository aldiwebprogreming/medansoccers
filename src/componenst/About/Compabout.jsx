import React, { useEffect, useState } from "react";
import Crousel from "./Crousel";
import Loadtabout from "../../skeleton/Loadtabout";
import Loadcrousel from "../../skeleton/Loadcrousel";

export default function Compabout() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);
  return (
    <div className="container my-3">
      {load ? (
        <>
          {" "}
          <Crousel />{" "}
        </>
      ) : (
        <Loadcrousel />
      )}

      {load ? (
        <>
          <div className="card shadow" style={{ border: "none" }}>
            <div className="card-header">
              <div class="d-flex justify-content-between">
                <p className="fw-bold">Tentang Medan Soccers</p>
                <p className="text-danger">
                  <i className="fas fa-list"></i>
                </p>
              </div>
            </div>
            <div className="card-body text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              velit illo vitae beatae. Voluptatibus perferendis nobis repellat
              blanditiis, sint tempore ut animi voluptas omnis quos obcaecati
              beataasse dignissimos saepe at. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. <br />
              <br />
              Aliquam accusantium, eius qui sunt, perferendis voluptas
              voluptatibus, maxime quae ut quas vel. Alias quam id vitae
              doloribus natus consequatur dolorem similique?
              <br />
              <br />
              Aliquam accusantium, eius qui sunt, perferendis voluptas
              voluptatibus, maxime quae ut quas vel. Alias quam id vitae
              doloribus natus consequatur dolorem similique?
            </div>
          </div>
        </>
      ) : (
        <Loadtabout />
      )}
    </div>
  );
}
