import React from "react";

export default function Comteam() {
  return (
    <div>
      <p className="fw-bold">Team favorit saat ini </p>
      <div className="card flex-row shadow" style={{ border: "none" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzx66w7FdUkWsRPZfNgAu5iPyBtdCFaCC0hoe8zHSJv1FbqiDX7xa20qyEs4pAm5HX8I&usqp=CAU"
          className="card-img-left shadow"
          alt=""
          style={{ height: "100px" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="" style={{ fontWeight: "bold" }}>
              Famos FC
            </h5>{" "}
            <h5 className="text-dangar">
              <i class="fa-solid fa-arrow-right"></i>
            </h5>
          </div>
          <p className="card-text text-warning">
            <i className="fas fa-trophy"></i> Top Winning
          </p>
        </div>
      </div>

      <div className="card flex-row mt-2 shadow">
        <img
          src="https://1.bp.blogspot.com/-5iAIM4d_RrQ/XyqtWxx-G6I/AAAAAAAAJZQ/J1YoadQIUocxd5WDeiJPmYsB7j6s0wOUgCLcBGAsYHQ/s600/Oxford_United_FC.png"
          className="card-img-left shadow"
          alt=""
          style={{ height: "100px" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="" style={{ fontWeight: "bold" }}></h5>
            <h5 className="text-dangar">
              <i className="fa-solid fa-arrow-right"></i>
            </h5>
          </div>
          <p className="card-text text-warning">
            {" "}
            <i className="fas fa-trophy"></i> Top Winning
          </p>
        </div>
      </div>
    </div>
  );
}
