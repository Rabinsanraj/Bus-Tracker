import { useNavigate} from "react-router-dom";
import { useState, useEffect, useRef } from "react";

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
    const intervalRef = useRef(null);
    const navigate = useNavigate(); // ✅ added this line
  
    useEffect(() => {
      setCaptcha(generateCaptcha());
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, []);
  
    const regenerateCaptcha = () => {
      let counter = 0;
      intervalRef.current = setInterval(() => {
        setCaptcha(generateCaptcha());
        counter++;
        if (counter >=3) {
          clearInterval(intervalRef.current);
        }
      }, 1000); // regenerate every 1 second for 5 seconds
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (captcha !== captchaInput.toUpperCase()) {
        alert("Incorrect CAPTCHA. Please try again.");
        regenerateCaptcha();
        setCaptchaInput(""); // clear just the CAPTCHA input
        return;
      }
  
      alert("Form submitted successfully!");
      navigate("/options"); // ✅ added this line
  
      e.target.reset(); // clear all inputs
      setCaptcha(generateCaptcha()); // refresh CAPTCHA
      setCaptchaInput(""); // reset CAPTCHA input state
    };
    return (
      <>
        <div className="container-fluid">
          <div className="container-fluid pb-5 d-flex">
            <div className="w-auto pt-4 mx-auto my-auto">
              <div className="card-body h1-form p-4"style={{minWidth: "auto",
                maxWidth: "500px",backgroundColor: "#804600",borderRadius: "15px",
                opacity: "90%",margin: "auto",marginTop: "50px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",}}>
                <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                  RESERVATION
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input type="text"className="form-control"placeholder="Enter Your Name"required/>
                  </div>
                  <div className="mb-4">
                    <input type="number"className="form-control"placeholder="Enter Mobile Number"required/>
                  </div>
  
                  {/* CAPTCHA */}
                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">Captcha</label>
                    <div style={{backgroundColor: "#fff",padding: "10px",textAlign: "center",
                      fontWeight: "bold",fontSize: "20px",letterSpacing: "3px",borderRadius: "5px",
                      marginBottom: "10px",}}>{captcha}</div>
                    <input type="text"className="form-control"placeholder="Enter the text shown above"
                      value={captchaInput}onChange={(e) => setCaptchaInput(e.target.value)}required/>
                  </div>
                  <button type="submit"className="btn fw-bold fs-5 text-white w-100"
                     style={{ backgroundColor: "#FF8C00" }} onClick={handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }