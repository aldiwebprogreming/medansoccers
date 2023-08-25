import React from "react";

export default function Compheader({ img }) {
  console.log(img);
  return (
    <div>
      <div
        className="card bg-danger text-white"
        style={{ borderRadius: "0px" }}
      >
        <div className="container my-5">
          <center>
            {img == "" ? (
              <img
                src="pemain.png"
                className="img-fluid mt-4"
                alt="Responsive image"
                style={{ height: "150px" }}
              ></img>
            ) : (
              <img
                src={img}
                className="img-fluid mt-4"
                alt="Responsive image"
                style={{ height: "150px" }}
              ></img>
            )}
          </center>
          <h4 className="card-title fw-bold text-center mt-3">
            Hay, {localStorage.getItem("nama")}
          </h4>
          <p className="text-center">
            Apakah anda sudah melengkapi data profil
          </p>
        </div>
      </div>
    </div>
  );
}
