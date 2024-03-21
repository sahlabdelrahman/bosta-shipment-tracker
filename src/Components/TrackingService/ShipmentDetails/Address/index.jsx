import styles from "./style.module.scss";

import addressConfig from "./config";

const { title, reportProblem, notProvided, image } = addressConfig;

const Address = ({ dropOffAddress }) => {
    const firstLine = dropOffAddress?.firstLine;

    return (
        <div className={styles.address}>
            <h6 className={styles.title}>{title}</h6>
            <div className={styles.content}>
                <div className={styles.addressDetails}>
                    <p className={styles.addressText}>
                        {firstLine ? firstLine : notProvided}
                    </p>
                </div>
                <div className={styles.reportProblem}>
                    <div className={styles.imageContainer}>
                        <p>{image}</p>
                    </div>
                    <div className={styles.reportProblemContent}>
                        <p>{reportProblem.title}</p>
                        <button type="button">
                            {reportProblem.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
