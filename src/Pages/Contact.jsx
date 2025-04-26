import { Cards } from "../Components/FullCompo"

export function Contact() {
    return (
        <>
            <div className="container text-white text-center mt-5">
                <div className="row mx-auto my-auto">
                    <Cards icon={<i className="bx bx-transfer-alt"></i>} title="Report" />
                    <Cards icon={<i className="bx bx-message-dots"></i>} title="Chatt Box" />
                    <Cards icon={<i className="bx bx-envelope"></i>} title="Mail" />
                    <Cards icon={<i className="bx bx-note"></i>} title="Suggestion Box" />
                </div>
            </div>
        </>
    )
}

<box-icon name='message-dots'></box-icon>