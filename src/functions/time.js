import i18next from "i18n/config";
const { t } = i18next;

export const formatDate = ({ date, type }) => {
    const daysOfWeek = t("time.dayNames", { returnObjects: true });
    const monthsOfYear = t("time.monthNames", { returnObjects: true });

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? t("time.pm") : t("time.am");

    // Convert to 12-hour format
    let formattedHours = hours % 12;
    formattedHours = formattedHours ? formattedHours : 12;

    // Add leading zeros if necessary
    const formattedMinutes = String(minutes).padStart(2, "0");

    switch (type) {
        case "time":
            return `${formattedHours}:${formattedMinutes} ${period}`;
        case "date":
            return `${day}/${date.getMonth() + 1}/${year}`;
        case "withoutTime":
            return ` ${day} ${month} ${year}`;
        default:
            return `${dayOfWeek} ${day}/${
                date.getMonth() + 1
            }/${year} ${formattedHours}:${formattedMinutes} ${period}`;
    }
};
