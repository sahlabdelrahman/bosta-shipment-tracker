import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { handleSubmit, handleTrackingNoChange } from "functions/trackShipment";

import SearchIcon from "Components/Icons/SearchIcon";

import navbarConfig from "../config";

import styles from "./style.module.scss";

const {
    actions: {
        trackShipment: { placeholder, text, description },
    },
} = navbarConfig;

const TrackShipment = () => {
    const { trackingNo } = useSelector((state) => state.trackShipment);
    const dispatch = useDispatch();

    const [showTrackingMenu, setShowTrackingMenu] = useState(false);

    const {
        i18n: { language },
    } = useTranslation();

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setShowTrackingMenu(true);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setShowTrackingMenu(false);
    };

    const handleChange = (e) => {
        handleTrackingNoChange({ dispatch, trackingNo: e?.target?.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit({ dispatch, trackingNo, lang: language });
    };

    return (
        <div
            className={styles.trackShipment}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span>{text}</span>
            <div
                className={`${styles.trackingMenuContainer} ${
                    showTrackingMenu ? styles.showTrackingMenu : ""
                }`}
            >
                <h6>{description}</h6>
                <form
                    className={styles.inputWithButton}
                    onSubmit={handleSubmitForm}
                >
                    <input
                        type="number"
                        placeholder={placeholder}
                        aria-label={placeholder}
                        required
                        onChange={handleChange}
                        value={trackingNo}
                    />
                    <button aria-label="Search" title="Search" type="submit">
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TrackShipment;
