import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../FireBase.config"; // Ensure path is correct

// ---------- Report Component ----------
export function Report() {
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const navigate = useNavigate();

  const reportCollection = collection(firestore, "reports");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(reportCollection, {
        title: problemTitle,
        description: problemDescription,
        createdAt: new Date()
      });

      alert("Your report is submitted.");
      setProblemTitle("");
      setProblemDescription("");
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
        <div
          className="card mx-auto p-3"
          style={{ backgroundColor: "#804600", maxWidth: "500px", width: "100%" }}
        >
          <input
            className="form-control mb-3 fw-bold"
            type="text"
            placeholder="Enter Problem Title"
            value={problemTitle}
            onChange={(e) => setProblemTitle(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-3 fw-bold"
            rows="6"
            placeholder="Enter your Problem Description"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="btn w-100 text-white fs-5 fw-bold"
            style={{ backgroundColor: "#FF8C00" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

// ---------- Help Component ----------
export function Help() {
  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a Help page</h1>
    </div>
  );
}

// ---------- Mail Component ----------
export function Mail() {
  return (
    <div className="container text-white text-center mt-3">
      <h1 className="fs-6 fw-bold text-center">
        <i className="bx bx-envelope fs-3"></i> Easycar@gmail.com
      </h1>
    </div>
  );
}

// ---------- Feedback Component ----------
export function Feedback() {
  const [problemAdvantages, setProblemAdvantages] = useState("");
  const [problemDisadvantages, setProblemDisadvantages] = useState("");
  const navigate = useNavigate();

  const feedbackCollection = collection(firestore, "feedback");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!problemAdvantages.trim() || !problemDisadvantages.trim()) {
      alert("Please fill in both fields before submitting.");
      return;
    }

    try {
      await addDoc(feedbackCollection, {
        advantages: problemAdvantages,
        disadvantages: problemDisadvantages,
        createdAt: new Date()
      });

      alert("Feedback submitted successfully!");
      setProblemAdvantages("");
      setProblemDisadvantages("");
      navigate("/options");
    } catch (error) {
      console.error("Error saving feedback:", error);
      alert("Failed to save feedback. Please try again.");
    }
  };

  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a Feedback page</h1>
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <div
            className="card mx-auto p-3"
            style={{ backgroundColor: "#804600", maxWidth: "500px", width: "100%" }}
          >
            <textarea
              className="form-control fw-bold fs-5"
              rows="6"
              placeholder="Enter Advantages"
              value={problemAdvantages}
              onChange={(e) => setProblemAdvantages(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="card mx-auto p-3"
            style={{ backgroundColor: "#804600", maxWidth: "500px", width: "100%" }}
          >
            <textarea
              className="form-control fw-bold fs-5"
              rows="6"
              placeholder="Enter Disadvantages"
              value={problemDisadvantages}
              onChange={(e) => setProblemDisadvantages(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn w-25 text-white fs-5 fw-bold"
            style={{ backgroundColor: "#FF8C00" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
