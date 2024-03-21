import { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/* Components */
import Navbar from "Components/Global/Navbar";
import SideMenu from "Components/Global/SideMenu";
import LoadingSpinner from "Components/Global/LoadingSpinner/LoadingSpinner";

/* Pages */
const TrackingService = lazy(() => import("pages/TrackingService"));

function App() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    const {
        t,
        i18n: { language, changeLanguage, dir },
    } = useTranslation();

    // Function to toggles between English ("en") and Arabic ("ar")
    const handleChangeLanguage = () => {
        const newLanguage = language === "en" ? "ar" : "en";
        changeLanguage(newLanguage);
        changeLanguage(newLanguage).then(() => {
            window.location.reload(true);
        });
    };

    useEffect(() => {
        document.dir = dir();

        if (language === "ar") {
            document.title = t("document.title");
            document
                .querySelector('meta[name="description"]')
                .setAttribute("content", t("document.description"));
        } else {
            document.title = t("document.title");
            document
                .querySelector('meta[name="description"]')
                .setAttribute("content", t("document.description"));
        }
    }, [dir, language, t]);

    useEffect(() => {
        if (showSideMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showSideMenu]);

    return (
        <div className="mainLayout">
            <header>
                <Navbar
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                />
            </header>
            <SideMenu
                showSideMenu={showSideMenu}
                setShowSideMenu={setShowSideMenu}
                language={language}
                handleChangeLanguage={handleChangeLanguage}
            />

            <main>
                <Suspense fallback={<LoadingSpinner />}>
                    <TrackingService />
                </Suspense>
            </main>
        </div>
    );
}
export default App;
