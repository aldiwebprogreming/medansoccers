import React from "react";

export default function Headerbokinglapangan({ judul, title }) {
  return (
    <div>
      <div
        className="card bg-primary text-white"
        style={{ borderRadius: "0px" }}
      >
        <div className="container my-5">
          <h3 className="card-title mt-5">{judul}</h3>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
