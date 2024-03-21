import { setTrackingNo } from "store";
import { getShipmentDetails } from "store/Thunks/TrackShipmentThunk";

import i18next from "i18n/config";
const { t } = i18next;

export const handleTrackingNoChange = ({ dispatch, trackingNo }) => {
    dispatch(setTrackingNo({ trackingNo }));
};

export const handleSubmit = ({ dispatch, trackingNo, lang }) => {
    dispatch(
        getShipmentDetails({
            trackingNo,
            lang,
        })
    );
    const params = new URLSearchParams(window.location.search);
    params.set("trackingNo", trackingNo);
    window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
    );
};

export const getStatusData = (status) => {
    switch (status) {
        case "DELIVERED":
            return {
                color: "#36B700",
                text: t("trackingService.statues.delivered"),
                step: 4,
            };
        case "DELIVERED_TO_SENDER":
            return {
                color: "#F9B905",
                text: t("trackingService.statues.notDelivered"),
                step: 3,
            };
        case "CANCELLED":
            return {
                color: "#F4060D",
                text: t("trackingService.statues.cancelled"),
                step: 3,
            };
        default:
            return null;
    }
};

export const parseStatus = (status) => {
    // Split the status string by underscores
    const words = status.split("_");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    // Join the capitalized words with spaces
    const parsedStatus = capitalizedWords.join(" ");

    return parsedStatus;
};
