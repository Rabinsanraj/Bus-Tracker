import { Cards } from "../Components/FullCompo"
import { MdReport, MdOutlineSupportAgent } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";



export function Contact() {
    return (
        <>
            <div className="container text-white text-center mt-3">
            <h1>This is a contact page</h1>
            <div className="row mx-auto my-auto">
                    <Cards icon={<MdReport className="bx bx-transfer-alt" style={{fontSize:"45px"}}/>} title="Report" link="/report" />
                    <Cards icon={<MdOutlineSupportAgent className="bx bx-message-dots" style={{fontSize:"45px"}}/>} title="Help" link="/help" />
                    <Cards icon={<IoIosMail className="bx bx-envelope" style={{fontSize:"45px"}}/>} title="Mail" link="/mail" />
                    <Cards icon={<RiFeedbackFill className="bx bx-note" style={{fontSize:"45px"}}/>} title="Feedback" link="/feedback" />
                </div>
            </div>
        </>
    )
}
