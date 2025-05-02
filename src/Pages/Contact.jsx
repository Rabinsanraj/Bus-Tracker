import { Cards } from "../Components/FullCompo"

export function Contact() {
    return (
        <>
            <div className="container text-white text-center mt-3">
            <h1>This is a contact page</h1>
            <div className="row mx-auto my-auto">
                    <Cards icon={<i className="bx bx-transfer-alt"></i>} title="Report" link="/report" />
                    <Cards icon={<i className="bx bx-message-dots"></i>} title="Help" link="/help" />
                    <Cards icon={<i className="bx bx-envelope"></i>} title="Mail" link="/mail" />
                    <Cards icon={<i className="bx bx-note"></i>} title="Suggestion" link="/feedback" />
                </div>
            </div>
        </>
    )
}
