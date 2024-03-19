import { useTranslation } from "react-i18next";     // i18next

// Component imports
import TableHead from "../TableHead";

const Stock = ({ stock }) => {   // Stock component
    const { t } = useTranslation();     // Translation hook

    // JSX
    return (
        <section className="section">
            <table className="flex flex-col justify-evenly items-center gap-1 text-lg lg:text-xl">     
                <TableHead />
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