import styles from "./style.module.scss";

const Message = ({ text }) => {
    return (
        <section className={styles.message}>
            <p className={styles.text}>{text}</p>
        </section>
    );
};

export default Message;
