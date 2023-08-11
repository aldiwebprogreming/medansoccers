import React from "react";
import Crousel from "./Crousel";

export default function Compabout() {
  return (
    <div className="container my-3">
      <Crousel />
      <div className="card shadow">
        <div className="card-header">
          <div class="d-flex justify-content-between">
            <p className="text-danger">Tentang Medan Soccers</p>
            <p className="text-danger">
              <i className="fas fa-list"></i>
            </p>
          </div>
        </div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto velit
          illo vitae beatae. Voluptatibus perferendis nobis repellat blanditiis,
          sint tempore ut animi voluptas omnis quos obcaecati beatae dignissimos
          saepe at. Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          <br />
          <br />
          Aliquam accusantium, eius qui sunt, perferendis voluptas voluptatibus,
          maxime quae ut quas vel. Alias quam id vitae doloribus natus
          consequatur dolorem similique?
          <br />
          <br />
          Aliquam accusantium, eius qui sunt, perferendis voluptas voluptatibus,
          maxime quae ut quas vel. Alias quam id vitae doloribus natus
          consequatur dolorem similique?
        </div>
      </div>
    </div>
  );
}
