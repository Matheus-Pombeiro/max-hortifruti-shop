import { useTranslation } from "react-i18next";     // i18next

const UnitsInput = ({ toChange, value }) => {      // UnitsInput component  
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <div className="flex flex-col space-y-2">
            <label
                className="font-medium"
                htmlFor="units"
            >{t("Units")}</label>
            <input
                type="number"
                className="input"
                id="units"
                name="units" 
                min="1"
                value={value} 
                required={true}
                placeholder={t("Placeholder")}
                onChange={e => toChange(e.target.value)}
            />
        </div>
    )
};

export default UnitsInput;