import { HashRouter,Routes,Route,Link, useLocation} from "react-router-dom";
import { useEffect, useState} from "react";
import {Registration} from "../Pages/Registration"
import{Options}from "../Pages/Options"


export const ScrollToTop = () =>{
  const {pathname} = useLocation();
  // console.log(pathname)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return null;
};

export function NavBar (){
  const [expanded, setExpanded] = useState(false);
  
    const handleNav = () => {
      setExpanded(false);
    };
    return(
      <HashRouter>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 position-sticky top-0 z-3" style={{backgroundColor:"#804600"}}>
          <div className="container-fluid">
            <Link to="/"><i className="bx bx-bus ms-3 text-white fs-2 p-2 rounded-circle"style={{backgroundColor:"#FF8C00"}}></i></Link>
            <Link className="navbar-brand fs-3 ms-2 fw-bold" style={{color:"#FF8C00"}} to="/">GBT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
            onClick={() => setExpanded(!expanded)}aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={handleNav} to="/options" >Options</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link me-5 fs-5 text-light fw-bold" onClick={handleNav} to="/contact" >Contact US</Link>
                </li>
               <li className='nav-item'>
                <Link className="btn fs-5 text-light fw-bold rounded-pill ps-4 pe-4 me-4" style={{backgroundColor:"#FF8C00"}}
                onClick={handleNav} to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
          <ScrollToTop/>
        </nav>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/register" element={<Registration/>}/>
      <Route path="/options" element={<Options/>}/>
    </Routes>
      </HashRouter>
    
    );
}

export function Intro() {
  return (
    <>
      <div>
        <p className="container fs-4 text-white text-center pt-5">
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