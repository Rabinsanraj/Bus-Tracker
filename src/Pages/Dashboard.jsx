import { useState } from "react"
import { Dashcomp, LeftBar } from "../Components/Dashcomp"

function Dashboard() {

    const [isDataAvailable, setAvailable] = useState(false)
    return (
        <>
            <div className="comtainer-fluid">
                <div className="row">
                    <div className="col-2 vh-100 text-white" style={{ border: "2px solid yellow", backgroundColor: "#00004A" }}>
                    <img src={"#"} alt="" />
                        <LeftBar name="Vetri Electronics"/>
                        <div style={{textAlign:"start"}}>
                        <LeftBar name="Dashboard"/>
                        <LeftBar name="+ Create Invoice"/>
                        <LeftBar name="Create Bill"/>
                        <hr/>
                        <LeftBar name="View Invoices"/>
                        <LeftBar name="View Bill"/>
                        </div>
                    </div>
                    <div className="col" style={{ border: "2px solid red" }}>
                        <div className="container bg-white mx-auto mt-5 d-flex" style={{
                            width: "95%",
                            borderRadius: "10px", boxShadow: "0px 0px 4px #8484848e"
                        }}>
                            <h3 className="p-2" style={{ color: "#00004A" }}>Vetri Electronics</h3>
                            <div className="ms-auto my-auto">
                                <button className="btn me-3" style={{ backgroundColor: "#ff9819" }}>+Create invoice</button>
                                <button className="btn" style={{ backgroundColor: "#ff9819" }}>+Create Bill</button>
                            </div>
                        </div>
                        <div className="row mx-auto mt-5" style={{ width: "95%" }}>
                            <Dashcomp icon={<i className='bx bx-receipt' style={{ color: "#ff9819", fontSize: "40px" }}></i>} name="Total Invoice" count="0" />
                            <Dashcomp icon={<i className='bx bx-money' style={{ color: "#ff9819", fontSize: "40px" }}></i>} name="Total Amount" count="$0" />
                            <Dashcomp icon={<i className='bx bx-time' style={{ color: "#ff9819", fontSize: "40px" }}></i>} name="Pending Bill" count="0" />
                            <Dashcomp icon={<i className='bx bx-error-alt' style={{ color: "#ff9819", fontSize: "40px" }}></i>} name="Due Amount" count="0" />
                        </div>
                        <div className="row  mx-auto mt-5" style={{ width: "95%" }}>
                            <div className="card" style={{ border: "2px solid red" }}>
                                <div className="card-title"><h2>All Invoices</h2></div>
                                <div className="card-body table-responsive">
                                    <table className="table table-bordered w-100 h-fit-content">
                                        <thead className="table-primary">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Created</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                isDataAvailable ? (
                                                    <></>
                                                ) : (
                                                    <tr className="text-center">
                                                        <td colSpan="6">No Invoices Found</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard