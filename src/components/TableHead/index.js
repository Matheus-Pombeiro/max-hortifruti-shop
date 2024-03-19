import { useTranslation } from "react-i18next";     // i18next

const TableHead = () => {   // TableHead component
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <thead className="w-full border-b border-green-300">
            <tr className="grid grid-cols-3">
                <th className="text-start">{t("Product")}</th>
                <th className="text-end">{t("Cost")}</th>
                <th className="text-end">{t("Units")}</th>
            </tr>
        </thead>
    )
};

export default TableHead;