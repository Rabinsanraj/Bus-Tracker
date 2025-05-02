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
            <form onSubmit={handleSubmit} style={{}}>
                <div className="card mx-auto p-3" style={{
                    backgroundColor: "#804600",
                    maxWidth: "500px", width: "100%"
                }}>
                    <input className="form-control mb-3 fw-bold"
                        type="text"
                        placeholder="Enter Problem Title"
                        value={problemTitle}
                        onChange={(e) => setProblemTitle(e.target.value)}
                        required />
                    <textarea className="form-control mb-3 fw-bold"
                        rows="6"
                        placeholder="Enter your Problem Description"
                        value={problemDescription}
                        onChange={(e) => setProblemDescription(e.target.value)}
                        required></textarea>
                    <button type="submit" className="btn w-100 text-white fs-5 fw-bold"
                        style={{ backgroundColor: "#FF8C00" }}>SUBMIT</button>
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


export function Feedback() {
    const [problemAdvantages, setProblemAdvantages] = useState('');
    const [problemDisadvantages, setProblemDisadvantages] = useState('');
    const navigate = useNavigate();

    const handleAdvantagesChange = (e) => setProblemAdvantages(e.target.value);
    const handleDisadvantagesChange = (e) => setProblemDisadvantages(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!problemAdvantages.trim() || !problemDisadvantages.trim()) {
            alert('Please fill in both fields before submitting.');
            return;
        }
        else {

        }

        alert('Feedback submitted successfully!');
        navigate('/options');
    };

    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a Feedback page</h1>
                <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-12 col-md-6">
                        <div className="card mx-auto p-3" style={{ backgroundColor: "#804600", maxWidth: "500px", width: "100%" }}>
                            <textarea className="form-control fw-bold fs-5 fw-bold" rows="6"
                                placeholder="Enter Advantages"
                                value={problemAdvantages}
                                onChange={handleAdvantagesChange} required></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card mx-auto p-3" style={{ backgroundColor: "#804600", maxWidth: "500px", width: "100%" }}>
                            <textarea className="form-control fw-bold fs-5 fw-bold" rows="6"
                                placeholder="Enter Disadvantages"
                                value={problemDisadvantages}
                                onChange={handleDisadvantagesChange} required></textarea>
                        </div>
                    </div>
                </form>
                <button type="submit" className="btn w-25 mt-4 text-white fs-5 fw-bold" style={{ backgroundColor: "#FF8C00" }}>SUBMIT</button>
            </div>
        </>
    );
}