import { useState } from "react";
import fetchIsOnWater from "../ReverceGeo";
import { ImLocation } from "react-icons/im";

const cardStyle = {
  backgroundColor: "#804600",
  boxShadow: "5px 5px 10px black",
  borderRadius: "15px",
};

const buttonStyle = {
  backgroundColor: "#FF8C00",
};

export function Track() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    try {
      const data = await fetchIsOnWater();
      const locationName =
        data?.address?.road ||
        data?.address?.village ||
        data?.address?.town ||
        data?.address?.city ||
        "Unknown";
      setCurrentLocation(locationName);
    } catch (error) {
      console.error("Failed to get location:", error);
      setCurrentLocation("Unavailable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card p-4" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title fs-4 fw-bold text-center text-white mb-4">
                TRACK YOUR BUS
              </h5>
              <form>
                <div className="mb-3 input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current Location"
                    value={currentLocation}
                    readOnly
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-warning fw-bold"
                    onClick={getLocation}
                    title="Get Current Location"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" />
                    ) : (
                      <ImLocation style={{ color: "red", fontSize: "21px" }} />
                    )}
                  </button>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Drop Location"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn text-white fw-bold w-100 fs-5"
                  style={buttonStyle}
                >
                  Search
                </button>
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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card p-4 text-white" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title fs-4 fw-bold text-center mb-4">
                TRACK YOUR BUS
              </h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current Location"
                    required
                  />
                </div>
                <div className="form-check d-flex align-items-center gap-2 mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="notifyCheckbox"
                    required
                  />
                  <label htmlFor="notifyCheckbox" className="form-check-label">
                    Notify Me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn text-white fw-bold w-100 fs-5"
                  style={buttonStyle}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TicketPrice() {
  return (
    <div className="container text-white text-center mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1>This is a TicketPrice page</h1>
        </div>
      </div>
    </div>
  );
}

export function AllRutes() {
  return (
    <div className="container text-white text-center mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1>This is an AllRutes page</h1>
        </div>
      </div>
    </div>
  );
}
