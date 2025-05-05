import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { firestore } from "../FireBase.config";
import { addDoc, collection } from "firebase/firestore";

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
  const navigate = useNavigate();

  const nameRef = useRef();
  const numberRef = useRef();

  const userCollection = collection(firestore, "users");

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
      if (counter >= 3) {
        clearInterval(intervalRef.current);
      }
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captcha !== captchaInput.toUpperCase()) {
      alert("Incorrect CAPTCHA. Please try again.");
      regenerateCaptcha();
      setCaptchaInput("");
      return;
    }

    const name = nameRef.current.value.trim();
    const number = numberRef.current.value.trim();

    try {
      await addDoc(userCollection, { name, number });
      alert("Form submitted successfully!");
      navigate("/options");
      e.target.reset();
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving data. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card p-1" style={{
              backgroundColor: "#804600", boxShadow: "5px 5px 10px black",
              borderRadius: "15px",
            }}>
            <div className="card-body">
              <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                RESERVATION
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Enter Your Name"
                    ref={nameRef} required />
                </div>
                <div className="mb-2">
                  <input type="text" pattern="[0-9]{10}"
                    className="form-control" ref={numberRef}
                    placeholder="Enter Mobile Number" required />
                </div>
                {/* CAPTCHA */}
                <div className="mb-3">
                  <label className="form-label text-white fw-bold">Captcha</label>
                  <div className="mb-3" style={{
                      backgroundColor: "#fff", padding: "10px",
                      textAlign: "center", fontWeight: "bold", fontSize: "20px",
                      letterSpacing: "3px", borderRadius: "5px",
                      marginBottom: "10px",
                    }}>
                    {captcha}
                  </div>
                  <input type="text" className="form-control" placeholder="Enter the text shown above"
                    value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
                </div>
                <button type="submit" className="btn fw-bold fs-5 text-white w-100"
                  style={{ backgroundColor: "#FF8C00" }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
