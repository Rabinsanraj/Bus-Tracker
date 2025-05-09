import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoBusSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Options } from "../Pages/Options";
import { Contact } from "../Pages/Contact";
import { Help, Mail, Report, Feedback } from "./ContactSub";
import { AllRutes, Notify, TicketPrice, Track } from "./OptionsSub";

// Scroll to top on route change
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <HashRouter>
      <nav className="navbar navbar-expand-lg pt-1 pb-1 position-sticky top-0 z-3" style={{ backgroundColor: "#804600" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="rounded-circle ms-1 p-2"style={{ backgroundColor: "#FF8C00"}}><IoBusSharp className="bx bx-bus text-white" style={{fontSize:"35px"}}/></span>
            <span className="fs-3 ms-2 fw-bold" style={{ color: "#FF8C00", textShadow: "3px 3px 5px black" }}>GBT</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{ backgroundColor: "#FF8C00" }}>
            <GiHamburgerMenu className="bx bx-menu text-white" style={{fontSize:"35px"}}/>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ textShadow: "3px 3px 5px black" }}>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={() => setExpanded(false)} to="/options">Options</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={() => setExpanded(false)} to="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
        </div>
        <ScrollToTop />
      </nav>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/options" element={<Options />} />
        <Route path="/contact" element={<Contact />} />

        {/* Contact Sub-Routes */}
        <Route path="/report" element={<Report />} />
        <Route path="/help" element={<Help />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Options Sub-Routes */}
        <Route path="/track" element={<Track />} />
        <Route path="/allrutes" element={<AllRutes />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/ticketprice" element={<TicketPrice />} />
      </Routes>
    </HashRouter>
  );
}

// Intro Component
export function Intro() {
  return (
    <div className="container">
      <p className="fs-5 text-white mt-3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt
        excepturi facilis et ex labore, veritatis fugit eius pariatur
        repudiandae ullam placeat voluptate eveniet architecto. Nam beatae ad
        maiores nisi ut, voluptatem dolorum. Quidem quam, ad commodi
        voluptatibus fuga vero modi ipsam nesciunt blanditiis illo corrupti
        nam tenetur? Odio ratione, atque dolorem cum ipsa esse, ullam
        laudantium praesentium sapiente soluta amet magni eaque? Blanditiis
        soluta dolor cumque accusantium doloremque quaerat harum suscipit
        ipsam! Quisquam neque minus placeat distinctio enim eum. Debitis
        soluta consequuntur ad optio facilis, nesciunt placeat minus aliquam
        vitae, explicabo beatae blanditiis fugiat dolorum amet enim, incidunt
        qui.
      </p>
    </div>
  );
}

// Cards Component
export function Cards({ icon, title, link }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 pb-3">
      <Link to={link} className="text-decoration-none">
        <div className="card w-auto" style={{ backgroundColor: "#FF8C00", textShadow: "2px 2px 5px black" }}>
          <div className="card-body text-white">
            <h1 className="fw-bold">{icon}</h1>
            <h4 className="fw-bold">{title}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
