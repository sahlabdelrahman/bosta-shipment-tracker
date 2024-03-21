import NavbarHamburger from "./NavbarHamburger";
import TrackShipment from "./TrackShipment";
import PagesContainer from "./PagesContainer";

import styles from "./style.module.scss";

import navbarConfig from "./config";

const {
    logo,
    actions: { signIn },
} = navbarConfig;

const ActionsContainer = ({
    language,
    handleChangeLanguage,
    showSideMenu,
    setShowSideMenu,
}) => {
    return (
        <ul className={styles.actionsContainer}>
            <li>
                <TrackShipment />
            </li>
            <li className={styles.hiddenInSmallScreen}>
                <a
                    href={signIn?.path}
                    aria-label={signIn?.text}
                    title={signIn?.text}
                >
                    {signIn?.text}
                </a>
            </li>
            <li className={styles.hiddenInSmallScreen}>
                <button
                    type="button"
                    aria-label="Change Language"
                    onClick={handleChangeLanguage}
                >
                    {language === "en" ? "عربي" : "ENG"}
                </button>
            </li>
            <li>
                <NavbarHamburger
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                />
            </li>
        </ul>
    );
};

const Navbar = ({
    showSideMenu,
    setShowSideMenu,
    language,
    handleChangeLanguage,
}) => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.container}>
                <a
                    href="/"
                    className={styles.logo}
                    aria-label="Navigate to the home page"
                    title="Navigate to the home page"
                >
                    {logo}
                </a>
                <PagesContainer />
                <ActionsContainer
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                />
            </section>
        </nav>
    );
};

export default Navbar;
