import { useTranslation } from "react-i18next";     // i18next

const Stock = ({ stock }) => {   // Stock component
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <section className="w-10/12 lg:w-6/12 xl:w-4/12 mx-auto bg-zinc-50 rounded-md shadow">
            <table className="p-4 flex flex-col justify-evenly items-center gap-1 text-lg lg:text-xl">     
                <thead className="w-full border-b border-green-300">
                    <tr className="grid grid-cols-3">
                        <th className="text-start">{t("Product")}</th>
                        <th className="text-end">{t("Cost")}</th>
                        <th className="text-end">{t("Units")}</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {stock.map(product => (
                        <tr key={product.id} className="grid grid-cols-3">
                            <td>{t(product.name)}</td>
                            <td className="text-end">{t("Currency")} {product.cost}</td>
                            <td className="text-end">{product.units}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
};

export default Stock;