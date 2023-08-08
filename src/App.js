// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingLapangan from "./pages/BookingLapangan";
import Formbooking from "./pages/Formbooking";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="card comcontent">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route
                  path="/bookinglapangan/:slug/:id"
                  element={<BookingLapangan />}
                />
                <Route
                  path="/formbooking/:idlapangan"
                  element={<Formbooking />}
                />
              </Routes>
            </Router>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
