import styles from "./loadingSpinner.module.scss"; // Import or define the CSS styles for the loading spinner

const LoadingSpinner = () => {
    return (
        <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingSpinner;
