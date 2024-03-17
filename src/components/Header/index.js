import { useTranslation } from "react-i18next";     // i18next

import ThemeSwitcher from "../ThemeSwitcher";       // Theme Switcher component
import LanguageSwitcher from "../LanguageSwitcher"; // Language Switcher component

const Header = () => {      // Header component
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <header className="w-screen h-60 xl:w-7/12 lg:h-72 mx-auto xl:rounded-b-lg shadow-xl bg-cover flex flex-col justify-center items-center gap-3" style={{ backgroundImage:"url(/assets/background.jpg)" }}>
                <div>
                    <h1 className="text-white text-2xl lg:text-3xl font-bold text-center">{t("Title")}</h1>
                    <p className="text-white text-lg font-medium">{t("Introduction")}</p>
                </div>
                <nav className="flex justify-between items-center gap-1">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </nav>
        </header>
    )
};

export default Header;