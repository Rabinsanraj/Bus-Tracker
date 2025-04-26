import { Cards } from "../Components/FullCompo"

export function Contact() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <div className="row mx-auto my-auto">
                    <Cards icon={<i className="bx bx-transfer-alt"></i>} title="Report" link="#" />
                    <Cards icon={<i className="bx bx-message-dots"></i>} title="Chat Box" link="#" />
                    <Cards icon={<i className="bx bx-envelope"></i>} title="Mail" link="#" />
                    <Cards icon={<i className="bx bx-note"></i>} title="Suggestion Box" link="#" />
                </div>
            </div>
        </>
    )
}