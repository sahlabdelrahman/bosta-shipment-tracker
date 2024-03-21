import SectionContainer from "Components/Global/SectionContainer";
import PagesContainer from "../Navbar/PagesContainer";

import navbarConfig from "../Navbar/config";

import styles from "./style.module.scss";

const {
    actions: { signIn },
} = navbarConfig;

const SideMenu = ({ showSideMenu, language, handleChangeLanguage }) => {
    return (
        <section
            className={`${styles.sideMenu} ${
                showSideMenu ? styles.showSideMenu : ""
            }`}
        >
            <SectionContainer>
                <PagesContainer
                    insideSideMenu
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                />
                <section className={styles.authPages}>
                    <a
                        href={signIn?.path}
                        aria-label={signIn?.text}
                        title={signIn?.text}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {signIn?.text}
                    </a>
                </section>
            </SectionContainer>
        </section>
    );
};

export default SideMenu;
