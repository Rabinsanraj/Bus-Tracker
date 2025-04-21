import { HashRouter,Routes,Route,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


export const ScrollToTop = () =>{
  const {pathname} = useLocation();
  // console.log(pathname)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return null;
};

export function NavBar (){
    return(
      <HashRouter>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 position-sticky top-0 z-3" style={{backgroundColor:"#804600"}}>
          <div className="container-fluid">
            <Link to="/"><i className="bx bx-bus ms-3 text-white fs-2 p-2 rounded-circle"style={{backgroundColor:"#FF8C00"}}></i></Link>
            <Link className="navbar-brand fs-3 ms-2 fw-bold" style={{color:"#FF8C00"}} to="/">GBT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5 text-light fw-bold" to="/options" >Options</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link me-5 fs-5 text-light fw-bold" to="/contact" >Contact US</Link>
                </li>
               <li className='nav-item'>
                <Link className="btn fs-5 text-light fw-bold rounded-pill ps-4 pe-4 me-4" style={{backgroundColor:"#FF8C00"}} to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
          <ScrollToTop/>
        </nav>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/register" element={<Registration/>}/>
    </Routes>
      </HashRouter>
    
    );
}

export function Intro() {
  return (
    <>
      <div>
        <p>
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
    </>
  );
}



function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

export function Registration() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha !== captchaInput.toUpperCase()) {
      alert("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha()); // regenerate on failure
      setCaptchaInput(""); // clear input
      return;
    }
    // Proceed with form submission
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid pb-5 d-flex">
          <div className="w-auto pt-4 mx-auto my-auto">
            <div
              className="card-body h1-form p-4"
              style={{minWidth: "auto",maxWidth: "500px", backgroundColor: "#804600",
                borderRadius: "15px",opacity: "90%",margin: "auto", marginTop: "50px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",}}>
              <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                RESERVATION
              </h5>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
                {/* CAPTCHA */}
                <div className="mb-3">
                  <label className="form-label text-white fw-bold">Captcha</label>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                      letterSpacing: "3px",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    {captcha}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the text shown above"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn fw-bold fs-5 text-white w-100"
                  style={{ backgroundColor: "#FF8C00" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
