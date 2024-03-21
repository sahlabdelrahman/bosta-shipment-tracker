import navbarConfig from "../config";

import styles from "./style.module.scss";

const { pages } = navbarConfig;

const PagesContainer = ({ insideSideMenu, handleChangeLanguage, language }) => {
    return (
        <ul
            className={`${styles.pagesContainer} ${
                insideSideMenu ? styles.sideMenu : ""
            }`}
        >
            {pages?.map(({ id, path, text }) => (
                <li key={id}>
                    <a
                        href={path}
                        aria-label={text}
                        title={text}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {text}
                    </a>
                </li>
            ))}
            {insideSideMenu && (
                <li>
                    <button
                        type="button"
                        aria-label="Change Language"
                        onClick={handleChangeLanguage}
                    >
                        {language === "en" ? "عربي" : "ENG"}
                    </button>
                </li>
            )}
        </ul>
    );
};

export default PagesContainer;
