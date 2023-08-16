// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingLapangan from "./pages/BookingLapangan";
import Formbooking from "./pages/Formbooking";
import Pay from "./pages/Pay";
import About from "./pages/About";
import Login from "./pages/Login";
import Intro from "./pages/Intro";
import Member from "./pages/Member";
import Profil from "./pages/Profil";
import Jadwalmember from "./pages/Jadwalmember";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="card comcontent" style={{ border: "0px" }}>
            <Router>
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route
                  path="/bookinglapangan/:slug/:id"
                  element={<BookingLapangan />}
                />
                <Route
                  path="/formbooking/:idlapangan"
                  element={<Formbooking />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/member" element={<Member />} />
                <Route path="/jadwalmemberkarir" element={<Jadwalmember />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profil" element={<Profil />} />
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
