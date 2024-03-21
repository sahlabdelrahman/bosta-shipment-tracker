import Details from "./Details";
import Address from "./Address";

import styles from "./style.module.scss";

const ShipmentDetails = ({ shipmentDetails }) => {
    return (
        <div className={styles.shipmentDetails}>
            <Details transitEvents={shipmentDetails?.TransitEvents} />
            <section className={styles.addressSection}>
                <Address dropOffAddress={shipmentDetails?.DropOffAddress} />
            </section>
        </div>
    );
};

export default ShipmentDetails;
