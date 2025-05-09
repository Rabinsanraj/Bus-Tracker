import { useState } from "react";
import fetchIsOnWater from "../ReverceGeo";
import { ImLocation } from "react-icons/im";


export function Track() {
    const [currentLocation, setCurrentLocation] = useState("");
    const [loading, setLoading] = useState(false);

    const getLocation = async () => {
        setLoading(true);
        try {
            const data = await fetchIsOnWater();
            console.log(data);
            const locationName = data?.address?.road || data?.address?.village ||
                data?.address?.town || data?.address?.city || "Unknown";
            setCurrentLocation(locationName);
        } catch (error) {
            console.error("Failed to get location:", error);
            setCurrentLocation("Unavailable");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card p-1" style={{
                        backgroundColor: "#804600",
                        boxShadow: "5px 5px 10px black", borderRadius: "15px",
                    }}>
                        <div className="card-body">
                            <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                                TRACK YOUR BUS
                            </h5>
                            <form>
                                <div className="mb-4 input-group">
                                    <input type="text" className="form-control"
                                        placeholder="Current Location" value={currentLocation} readOnly
                                        required />
                                    <button type="button" className="btn btn-warning fw-bold"
                                        onClick={getLocation} title="Get Current Location"
                                        disabled={loading}>
                                        {loading ? (
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        ) : (<ImLocation className="mx-auto my-auto" style={{color:"red", fontSize:"21px"}}/>)}</button>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control"
                                        placeholder="Drop Location" required />
                                </div>
                                <button type="submit" className="btn fw-bold w-100 mt-3 fs-5 text-white"
                                    style={{ backgroundColor: "#FF8C00" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export function Notify() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card p-1" style={{
                            backgroundColor: "#804600",
                            boxShadow: "5px 5px 10px black", borderRadius: "15px"
                        }}>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                                    TRACK YOUR BUS
                                </h5>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" placeholder="Current Location" required />
                                    </div>
                                    <div className="mb-2">
                                        <input type="checkbox" className="form-check-input d-flex" required />
                                        <span >Notify Me</span>
                                    </div>
                                    <button type="submit" className="btn fw-bold w-100 mt-3 fs-5 text-white fs-5 fw-bold"
                                        style={{ backgroundColor: "#FF8C00" }}>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function TicketPrice() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a TicketPrice page</h1>
            </div>
        </>
    )
}

export function AllRutes() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a AllRutes page</h1>
            </div>
        </>
    )
}
