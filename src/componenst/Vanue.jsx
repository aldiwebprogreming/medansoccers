import React from "react";

export default function Vanue() {
  return (
    <div>
      <p className="text-danger" style={{ fontWeight: "bold" }}>
        Booking lapangan buat kamu <i class="fa-regular fa-futbol"></i>{" "}
      </p>
      <div className="row">
        <div className="col-sm-4 mt-3">
          <div class="card shadow">
            <img
              class="card-img-top"
              src="https://t-2.tstatic.net/jogja/foto/bank/images2/Lapangan-Karitas-dari-Semak-Belukar-Disulap-Jadi-Lapangan-Mini-Soccer-Berstandar-Internasional.jpg"
            />
            <div class="card-body">
              <h5 class="card-title">Lapangan A</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-danger btn-block">
                Booking Lapangan
              </a>
            </div>
          </div>
        </div>
 

        <div className="col-sm-4 mt-3">
          <div class="card shadow">
            <img
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tiNocpY0rNtte5jwtfL-9V3bJxIDPdLI7LkmpIPTj6yXmP-5kyMqMJ1siIMsECVxtlg&usqp=CAU"
            />
            <div class="card-body">
              <h5 class="card-title">Lapangan B</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-danger btn-block">
                Booking Lapangan
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 mt-3">
          <div class="card shadow">
            <img
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2OszHgePc0QxdWCQAaBIsvO8ZJsWI6JDx5ueACSLIe9JnLg_eqL3_lpokW_hkcEiIVM&usqp=CAU"
            />
            <div class="card-body">
              <h5 class="card-title">Lapangan C</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-danger btn-block">
                Booking Lapangan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
