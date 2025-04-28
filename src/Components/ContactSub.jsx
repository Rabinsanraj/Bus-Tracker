import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Report() {
    const [problemTitle, setProblemTitle] = useState("");
    const [problemDescription, setProblemDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Your report is submitted")
        setProblemTitle("");
        setProblemDescription("");
      
        navigate("/options");
    };

    return (
        <div className="container text-white text-center mt-3">
            <h1>This is a Report page</h1>
            <form onSubmit={handleSubmit}>
                <div className="card mx-auto p-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <input
                        className="form-control mb-3 fw-bold"
                        type="text"
                        placeholder="Enter your Problem"
                        value={problemTitle}
                        onChange={(e) => setProblemTitle(e.target.value)}
                        required
                    />
                    <textarea
                        className="form-control mb-3 fw-bold"
                        rows="6"
                        placeholder="Enter your Problem"
                        value={problemDescription}
                        onChange={(e) => setProblemDescription(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary w-100">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}



export function Help() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a Help page</h1>
            </div>
        </>
    )
}

export function Mail() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1 className="fs-6 fw-bold text-center"><i className='bx bx-envelope fs-3'></i> Easycar@gmail.com</h1>
            </div>
        </>
    )
}


export function Suggestion() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a Suggestion page</h1>
            </div>
        </>
    )
} 