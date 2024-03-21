import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import SectionContainer from "Components/Global/SectionContainer";
import TrackOrder from "Components/TrackingService/TrackOrder";
import DetailsHeader from "Components/TrackingService/DetailsHeader";
import ShipmentDetails from "Components/TrackingService/ShipmentDetails";
import Message from "Components/Global/Message";
import LoadingSpinner from "Components/Global/LoadingSpinner/LoadingSpinner";

import styles from "./style.module.scss";

const TrackingService = () => {
    const { isLoading, error, shipmentDetails } = useSelector(
        (state) => state.trackShipment
    );
    const { t } = useTranslation();

    return (
        <div className={styles.trackingService}>
            <SectionContainer>
                <TrackOrder />
                {isLoading && <LoadingSpinner />}
                {!isLoading && error && (
                    <Message
                        text={
                            error?.response?.data?.error || "Unexpected error"
                        }
                    />
                )}
                {!isLoading &&
                !error &&
                Object.keys(shipmentDetails).length > 0 ? (
                    <>
                        <DetailsHeader shipmentDetails={shipmentDetails} />
                        <ShipmentDetails shipmentDetails={shipmentDetails} />
                    </>
                ) : (
                    !isLoading &&
                    !error && (
                        <Message text={t("trackingService.enterTrackingNo")} />
                    )
                )}
            </SectionContainer>
        </div>
    );
};

export default TrackingService;
