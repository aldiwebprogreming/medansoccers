import React from "react";

export default function CompSlide({ gambar }) {
  return (
    <div>
      <div className="container">
        <div
          className="card compslide shadow"
          style={{
            backgroundImage: `url(${gambar})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
