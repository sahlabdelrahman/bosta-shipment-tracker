import Stepper from "./Stepper";

import { getStatusData } from "functions/trackShipment";
import { formatDate } from "functions/time";

import styles from "./style.module.scss";

import detailsHeaderConfig from "./config";

const { shipmentNumber, lastUpdate, merchantName, deliveryTimeWithin } =
    detailsHeaderConfig;

const DetailsHeader = ({ shipmentDetails }) => {
    const statusData = getStatusData(shipmentDetails?.CurrentStatus?.state);

    return (
        <div className={styles.detailsHeader}>
            <section className={styles.details}>
                <div className={styles.column}>
                    <p className={styles.title}>
                        {shipmentNumber} {shipmentDetails?.TrackingNumber}
                    </p>
                    <p
                        className={styles.data}
                        style={{ color: statusData?.color }}
                    >
                        {statusData?.text}
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>{lastUpdate}</p>
                    <p className={styles.data}>
                        {formatDate({
                            date: new Date(
                                shipmentDetails?.CurrentStatus?.timestamp
                            ),
                        })}
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>{merchantName}</p>
                    <p className={styles.data}>{shipmentDetails?.provider}</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>{deliveryTimeWithin}</p>
                    <p className={styles.data}>
                        {formatDate({
                            date: new Date(shipmentDetails?.PromisedDate),
                            type: "withoutTime",
                        })}
                    </p>
                </div>
            </section>
            <section className={styles.stepperContainer}>
                <Stepper
                    currentStep={statusData?.step}
                    color={statusData?.color}
                />
            </section>
        </div>
    );
};

export default DetailsHeader;
