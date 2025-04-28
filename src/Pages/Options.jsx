import { Cards } from "../Components/FullCompo"

export function Options() {
    return (
        <>
            <div className="container text-white text-center mt-3">
                <h1>This is a Options page</h1>
                <div className="row mx-auto my-auto">
                    <Cards icon={<i className="bx bx-current-location"></i>} title="Track" link="/track" />
                    <Cards icon={<i className="bx bx-check-double"></i>} title="Check" link="/check" />
                    <Cards icon={<i className="bx bx-bell"></i>} title="Notify" link="/notify" />
                    <Cards icon={<i className="bx bx-purchase-tag"></i>} title="Ticket Price" link="/ticketprice" />
                </div>
            </div>
        </>
    )
}
<box-icon name='purchase-tag' color='#ffffff' ></box-icon>