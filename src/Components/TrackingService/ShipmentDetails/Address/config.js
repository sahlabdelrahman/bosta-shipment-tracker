import i18next from "i18n/config";
const { t } = i18next;

const addressConfig = {
    image: t("trackingService.shipmentDetails.address.image"),
    title: t("trackingService.shipmentDetails.address.title"),
    notProvided: t("trackingService.shipmentDetails.address.notProvided"),
    reportProblem: {
        title: t("trackingService.shipmentDetails.reportProblem.title"),
        buttonText: t(
            "trackingService.shipmentDetails.reportProblem.buttonText"
        ),
    },
};

export default addressConfig;
