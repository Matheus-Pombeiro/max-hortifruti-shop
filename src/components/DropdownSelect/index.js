import { useTranslation } from "react-i18next";     // i18next

const DropdownSelect = ({ stock, value, toChange }) => {  // DropdownSelect component  
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <div className="space-y-2">
            <label 
                className="font-medium"
                htmlFor="product"
            >{t("Product")}</label>
            <select 
                className="input"
                id="product"
                name="product"
                value={value}
                required={true}
                onChange={e => toChange(e.target.value)}
            >
                <option value="">{t("Choose a product")}</option>
                {stock.map(product => (
                    <option key={product.id} value={product.name}>{t(product.name)}</option>
                ))}
            </select>
        </div>
    )
};

export default DropdownSelect;