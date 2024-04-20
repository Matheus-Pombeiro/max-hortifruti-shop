import { useTranslation } from "react-i18next";     // i18next

import TableHead from "../TableHead";   // imports

const Cart = ({ cart, subtotal }) => {    // Cart Component
    const { t } = useTranslation();     // Translation hook

    return (    // JSX
        <section className="section">
            <table className="flex flex-col justify-evenly items-center gap-1 text-lg lg:text-xl">
                <TableHead />
                <tbody className="w-full">
                    {cart.map(product => (
                        <tr key={product.product} className="grid grid-cols-3">
                            <td>{t(product.product)}</td>
                            <td className="text-end">{t("Currency")} {product.cost}</td>
                            <td className="text-end">{product.units}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="w-full mt-3 border-t border-green-300">
                    <tr className="flex justify-end gap-2">
                        <td className="font-semibold">Subtotal:</td>
                        <td>{t("Currency")} {subtotal.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
};

export default Cart;