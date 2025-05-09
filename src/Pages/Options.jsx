import { Cards } from "../Components/FullCompo";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";
import { FaHistory } from "react-icons/fa";

const iconStyle = { fontSize: "45px" };

export function Options() {
  return (
    <div className="container text-white text-center mt-3">
      <h1>This is an Options page</h1>
      <div className="row mx-auto my-auto">
        <Cards icon={<FaLocationCrosshairs style={iconStyle} />} title="Track" link="/track" />
        <Cards icon={<MdNotificationsActive style={iconStyle} />} title="Notify" link="/notify" />
        <Cards icon={<ImPriceTag style={iconStyle} />} title="Ticket Price" link="/ticketprice" />
        <Cards icon={<FaHistory style={iconStyle} />} title="History" link="/allrutes" />
      </div>
    </div>
  );
}
