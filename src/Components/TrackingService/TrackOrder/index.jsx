import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "Components/Icons/SearchIcon";

import { handleSubmit, handleTrackingNoChange } from "functions/trackShipment";

import styles from "./style.module.scss";

import trackOrderConfig from "./config";
import i18next from "i18n/config";

const { title, description, placeholder } = trackOrderConfig;

const { language } = i18next;

const TrackOrder = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Read the query parameter from the URL
        const params = new URLSearchParams(window.location.search);
        const trackingNo = params.get("trackingNo");
        if (trackingNo) {
            handleSubmit({ dispatch, trackingNo, lang: language });
            handleTrackingNoChange({ dispatch, trackingNo });
        }
    }, [dispatch]);

    const { trackingNo } = useSelector((state) => state.trackShipment);

    const handleChange = (e) => {
        handleTrackingNoChange({ dispatch, trackingNo: e?.target?.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit({ dispatch, trackingNo, lang: language });
    };

    return (
        <div className={styles.trackOrder}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <form
                className={styles.inputWithButton}
                onSubmit={handleSubmitForm}
            >
                <input
                    type="number"
                    placeholder={placeholder}
                    aria-label={placeholder}
                    required
                    value={trackingNo}
                    onChange={handleChange}
                />
                <button aria-label="Search" title="Search" type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default TrackOrder;
