import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth, firestore } from "../FireBase.config";
import { sendSignInLinkToEmail } from "firebase/auth";
import { Cards } from "./FullCompo";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineAttachEmail,MdMarkUnreadChatAlt } from "react-icons/md";


const iconStyle = { fontSize: "45px" };

const useEmailVerification = (email) => {
  const [verificationSent, setVerificationSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  // this is a comment

  const sendVerificationEmail = async () => {
    const actionCodeSettings = {
      url: "http://localhost:3000/verify-email",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Verification email sent to " + email);
      setVerificationSent(true);
    } catch (error) {
      console.error("Error sending verification email:", error);
      alert("Failed to send verification email. Please try again.");
    }
  };

  const checkEmailVerification = () => {
    const storedEmail = window.localStorage.getItem("emailForSignIn");
    if (storedEmail && storedEmail === email) {
      setEmailVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Please verify your email first.");
    }
  };

  return { verificationSent, emailVerified, sendVerificationEmail, checkEmailVerification };
};

export function Report() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const reportCollection = collection(firestore, "reports");
  const { verificationSent, emailVerified, sendVerificationEmail } = useEmailVerification(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailVerified) return alert("Please verify your email before submitting.");

    try {
      await addDoc(reportCollection, {
        name,
        email,
        title,
        description,
        createdAt: new Date(),
      });

      alert("Your report is submitted.");
      setTitle("");
      setDescription("");
      navigate("/options");
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit report. Please try again.");
    }
  };

  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a Report page</h1>
      <form onSubmit={handleSubmit}>
        <div className="card mx-auto p-3 w-100" style={{ backgroundColor: "#804600", maxWidth: "500px" }}>
          <input
            className="form-control mb-3 fw-bold"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="input-group mb-3">
            <input
              className="form-control fw-bold"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="btn btn-warning fw-bold"
              type="button"
              onClick={sendVerificationEmail}
              disabled={verificationSent}
            >
              {verificationSent ? "Verified" : "Verify"}
            </button>
          </div>
          <input
            className="form-control mb-3 fw-bold"
            type="text"
            placeholder="Enter Problem Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-3 fw-bold"
            rows="6"
            placeholder="Enter your Problem Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="btn text-white fs-5 fw-bold w-100" style={{ backgroundColor: "#FF8C00" }}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export function Help() {
  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a Help page</h1>
      <div className="row mx-auto my-auto">
       <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<TbPhoneCall style={iconStyle} />} title="+91 7868067207" /> 
        <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<MdOutlineAttachEmail style={iconStyle}/>} title="robinsanraj207@gmail.com" />
        <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<MdMarkUnreadChatAlt style={iconStyle} />} title="Chat" />
      </div>
    </div>
  );
}

// export function Mail() {
//   return (
//     <div className="container text-white text-center mt-3">
//       <h1 className="fs-6 fw-bold">
//         <i className="bx bx-envelope fs-3"></i> Easycar@gmail.com
//       </h1>
//     </div>
//   );
// }

export function Feedback() {
  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const feedbackCollection = collection(firestore, "feedback");
  const { verificationSent, emailVerified, sendVerificationEmail } = useEmailVerification(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailVerified) return alert("Please verify your email before submitting.");
    if (!advantages.trim() || !disadvantages.trim()) return alert("Please fill in both fields.");

    try {
      await addDoc(feedbackCollection, {
        advantages,
        disadvantages,
        createdAt: new Date(),
      });

      alert("Feedback submitted successfully!");
      setAdvantages("");
      setDisadvantages("");
      navigate("/options");
    } catch (error) {
      console.error("Error saving feedback:", error);
      alert("Failed to save feedback. Please try again.");
    }
  };

  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a Feedback page</h1>
      <form className="row g-4 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <div className="card p-3" style={{ backgroundColor: "#804600" }}>
            <textarea
              className="form-control fw-bold fs-5"
              rows="6"
              placeholder="Enter Advantages"
              value={advantages}
              onChange={(e) => setAdvantages(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card p-3" style={{ backgroundColor: "#804600" }}>
            <textarea
              className="form-control fw-bold fs-5"
              rows="6"
              placeholder="Enter Disadvantages"
              value={disadvantages}
              onChange={(e) => setDisadvantages(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="card p-3 mx-auto" style={{ backgroundColor: "#804600", maxWidth: "500px" }}>
            <div className="input-group">
              <input
                className="form-control fw-bold"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn btn-warning fw-bold"
                type="button"
                onClick={sendVerificationEmail}
                disabled={verificationSent}
              >
                {verificationSent ? "Verified" : "Verify"}
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn text-white fs-5 fw-bold w-50" style={{ backgroundColor: "#FF8C00" }}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}