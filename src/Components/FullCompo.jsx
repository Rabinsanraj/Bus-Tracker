import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { IoBusSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css"

const Options = lazy(() => import('../Pages/Options').then(m => ({ default: m.Options })));
const Contact = lazy(() => import('../Pages/Contact').then(m => ({ default: m.Contact })));
// OptionsSub
const AllRutes = lazy(() => import('./OptionsSub').then(m => ({ default: m.AllRutes })));
const Notify = lazy(() => import('./OptionsSub').then(m => ({ default: m.Notify })));
const TicketPrice = lazy(() => import('./OptionsSub').then(m => ({ default: m.TicketPrice })));
const Track = lazy(() => import('./OptionsSub').then(m => ({ default: m.Track })));
// ContactSub
const Report = lazy(() => import('./ContactSub').then(m => ({ default: m.Report })));
const Help = lazy(() => import('./ContactSub').then(m => ({ default: m.Help })));
const Mail = lazy(() => import('./ContactSub').then(m => ({ default: m.Mail })));
const Feedback = lazy(() => import('./ContactSub').then(m => ({ default: m.Feedback })));

// const [Report, Help, Mail, Feedback] = lazy(()=>import('./ContactSub').then(m=>{
//   for (const key in object) {

//     return ({ default: m.object[key]})
//   }
// }))


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
    <Suspense fallback={<div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="loader position-relative">
    <div className="box">
      <div className="logo d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="svg">
          <path d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 0 49.2967 0 40.5456V4.82927C0 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z" />
          <path d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z" />
          <path d="M0 83.2195C0 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707V83.2195Z" />
        </svg>
      </div>
    </div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </div>
</div>
}>
      <HashRouter>
        <nav className="navbar navbar-expand-lg pt-1 pb-1 position-sticky top-0 z-3" style={{ backgroundColor: "#804600" }}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <span className="rounded-circle ms-1 p-2" style={{ backgroundColor: "#FF8C00" }}><IoBusSharp className="bx bx-bus text-white" style={{ fontSize: "35px" }} /></span>
              <span className="fs-3 ms-2 fw-bold" style={{ color: "#FF8C00", textShadow: "3px 3px 5px black" }}>GBT</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setExpanded(!expanded)}
              style={{ backgroundColor: "#FF8C00" }}>
              <GiHamburgerMenu className="bx bx-menu text-white" style={{ fontSize: "35px" }} />
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
    </Suspense>
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