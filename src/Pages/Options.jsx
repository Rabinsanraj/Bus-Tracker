import { Cards } from "../Components/FullCompo"
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";
import { FaHistory } from "react-icons/fa";

export function Options() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a Options page</h1>
                <div className="row mx-auto my-auto">
                    <Cards icon={<FaLocationCrosshairs className="bx bx-current-location"style={{fontSize:"45px"}}/>} title="Track" link="/track" />
                    <Cards icon={<MdNotificationsActive className="bx bx-bell"style={{fontSize:"45px"}}/>} title="Notify" link="/notify" />
                    <Cards icon={<ImPriceTag className="bx bx-purchase-tag"style={{fontSize:"45px"}}/>} title="Ticket Price" link="/ticketprice" />
                    <Cards icon={<FaHistory className="bx bx-check-double"style={{fontSize:"45px"}}/>} title="History" link="/allrutes" />
                </div>
            </div>
        </>
    )
}
<box-icon name='purchase-tag' color='#ffffff' ></box-icon>