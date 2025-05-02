
export function Dashcomp(props) {
    return (
        <>
            <div className="col text-center">
                <div className="card p-2" style={{ boxShadow: "0px 0px 4px #8484848e" }}>
                    <div className="card-title my-auto">
                        {props.icon}
                    </div>
                    <div className="card-body my-auto">
                        <h4>{props.name}</h4>
                        <h4>{props.count}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export function LeftBar(props) {
    return (
        <>
            <div className="row p-3">
                {props.name === "Vetri Electronics" ? (<h5 className="text-center fw-bold">
                    {props.name}</h5>) : <a href="#" className="nav-link"><h6 >{props.name}</h6></a>}


            </div>
        </>
    )
}