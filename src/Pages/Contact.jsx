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
        <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<MdReport style={iconStyle} />} title="Report" link="/report" />
        <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<MdOutlineSupportAgent style={iconStyle} />} title="Help" link="/help" />
        <Cards cardres={"col-sm-12 col-md-6 col-lg-4 pb-3"} icon={<RiFeedbackFill style={iconStyle} />} title="Feedback" link="/feedback" />
      </div>
    </div>
  );
}