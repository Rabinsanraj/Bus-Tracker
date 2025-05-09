import { Cards } from "../Components/FullCompo";
import { MdReport, MdOutlineSupportAgent } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";

const iconStyle = { fontSize: "45px" };

export function Contact() {
  return (
    <div className="container text-white text-center mt-3">
      <h1>This is a contact page</h1>
      <div className="row mx-auto my-auto">
        <Cards icon={<MdReport style={iconStyle} />} title="Report" link="/report" />
        <Cards icon={<MdOutlineSupportAgent style={iconStyle} />} title="Help" link="/help" />
        <Cards icon={<IoIosMail style={iconStyle} />} title="Mail" link="/mail" />
        <Cards icon={<RiFeedbackFill style={iconStyle} />} title="Feedback" link="/feedback" />
      </div>
    </div>
  );
}
