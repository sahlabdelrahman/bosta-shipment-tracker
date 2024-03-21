import EnLogo from "Components/Icons/EnLogo";
import ArLogo from "Components/Icons/ArLogo";

import i18next from "i18n/config";
const { t, language } = i18next;

const navbarConfig = {
    logo: language === "en" ? <EnLogo /> : <ArLogo />,
    pages: [
        {
            id: 0,
            path: "/",
            text: t("header.pages.home"),
        },
        {
            id: 1,
            path: "/",
            text: t("header.pages.pricing"),
        },
        {
            id: 2,
            path: "/",
            text: t("header.pages.callSales"),
        },
    ],
    actions: {
        trackShipment: {
            id: 0,
            text: t("header.actions.trackShipment"),
            description: t("header.actions.trackYourShipment"),
            placeholder: t("header.actions.trackingNo"),
        },
        signIn: {
            id: 1,
            path: "/",
            text: t("header.actions.signIn"),
            page: true,
        },
    },
};

export default navbarConfig;
