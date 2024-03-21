import i18next from "i18n/config";
const { t } = i18next;

const detailsHeaderConfig = {
    shipmentNumber: t("trackingService.detailsHeader.shipmentNumber"),
    lastUpdate: t("trackingService.detailsHeader.lastUpdate"),
    merchantName: t("trackingService.detailsHeader.merchantName"),
    deliveryTimeWithin: t("trackingService.detailsHeader.deliveryTimeWithin"),
    stepper: {
        shipmentCreated: t(
            "trackingService.detailsHeader.stepper.shipmentCreated"
        ),
        shipmentReceived: t(
            "trackingService.detailsHeader.stepper.shipmentReceived"
        ),
        shipmentOutForDelivery: t(
            "trackingService.detailsHeader.stepper.shipmentOutForDelivery"
        ),
        shipmentDelivered: t(
            "trackingService.detailsHeader.stepper.shipmentDelivered"
        ),
    },
};

export default detailsHeaderConfig;
