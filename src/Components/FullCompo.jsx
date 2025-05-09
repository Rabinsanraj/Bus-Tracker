import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const handleNav = () => {
    setExpanded(false);
  };


  return (
    <HashRouter>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 position-sticky top-0 z-3" style={{ backgroundColor: "#804600" }}>
        <div className="container-fluid">
          <Link to="/" className="w-0">
            <i className="bx bx-bus ms-3 text-white fs-2 p-2 rounded-circle" style={{ backgroundColor: "#FF8C00" }}></i>
          </Link>
          <Link className="navbar-brand fs-3 ms-2 fw-bold" style={{ color: "#FF8C00", textShadow: "3px 3px 5px black" }} to="/">GBT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            onClick={() => setExpanded(!expanded)} aria-label="Toggle navigation" style={{ backgroundColor: "#FF8C00" }}>
            <i className="bx bx-menu text-white" style={{ fontSize: "35px" }}></i>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ textShadow: "3px 3px 5px black" }}>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={handleNav} to="/options">Options</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={handleNav} to="/contact">Contact US</Link>
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

// Intro Component with glow on scroll bottom
export function Intro() {
  return (
    <div className="container">
      <p className="fs-5 text-white mt-3" style={{textAlign:"justify"}}>
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

export function Cards(props) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 pb-3">
        <Link to={props.link} style={{ textDecoration: "none" }}>
          <div className="card w-auto" style={{
            backgroundColor: "#FF8C00",
            textShadow: "2px 2px 5px black"
          }}>
            <div className="card-body">
              <h1 className="card-title text-white fw-bold">{props.icon}</h1>
              <h4 className="card-title text-white fw-bold">{props.title}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}