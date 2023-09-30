import React from "react";

export default function Compheader({ img }) {
  // console.log(img);
  return (
    <div>
      <div
        className="card text-white"
        style={{
          borderRadius: "0px",
          backgroundImage:
            "url('https://p4.wallpaperbetter.com/wallpaper/398/874/541/champions-league-stadium-wallpaper-preview.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "containt",
          backgroundPosition: "center",
        }}
      >
        <div className="container my-5">
          <center>
            {img == "" ? (
              <img
                src="pemain.png"
                className="img-fluid mt-4"
                alt=""
                style={{
                  height: "150px",
                  borderRadius: "100%",
                  borderStyle: "solid",
                }}
              ></img>
            ) : (
              <img
                src={img}
                className="img-fluid mt-4"
                alt=""
                style={{
                  height: "150px",
                  borderRadius: "100%",
                  borderStyle: "solid",
                }}
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
