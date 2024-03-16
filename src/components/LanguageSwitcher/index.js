import { useTranslation } from "react-i18next";

const languageOptions = [
    {
        name: "English",
        value: "en",
        flag: "/assets/british-flag.png"
    },
    {
        name: "Portuguese",
        value: "pt",
        flag: "/assets/portuguese-flag.png"
    }
];

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    // JSX
    return (
        <div className="space-x-1">
            {languageOptions.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.name} className="header-btn"/>
                </button>
            ))}
        </div>
    )
};

export default LanguageSwitcher;