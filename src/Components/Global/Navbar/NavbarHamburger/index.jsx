import styles from "./style.module.scss";

const NavbarHamburger = ({ showSideMenu, setShowSideMenu }) => {
    // Function to toggle side menu
    const handleToggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
    };
    return (
        <div
            className={`${styles.navbarHamburger} ${
                showSideMenu ? styles.showSideMenu : ""
            }`}
            onClick={handleToggleSideMenu}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default NavbarHamburger;
