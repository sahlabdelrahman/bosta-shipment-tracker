import i18next from "i18n/config";
const { t } = i18next;

const detailsConfig = {
    title: t("trackingService.shipmentDetails.details.title"),
    data: {
        branch: t("trackingService.shipmentDetails.details.data.branch"),
        date: t("trackingService.shipmentDetails.details.data.date"),
        time: t("trackingService.shipmentDetails.details.data.time"),
        details: t("trackingService.shipmentDetails.details.data.details"),
        noDetails: t("trackingService.shipmentDetails.details.data.noDetails"),
    },
};

export default detailsConfig;
