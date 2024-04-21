import { useTranslation } from "react-i18next";     // i18next

import { useState } from "react";   // useState

// Component imports
import DropdownSelect from "../DropdownSelect";
import UnitsInput from "../UnitsInput";

const Form = ({ stock, toAddProduct, cleanCart }) => {    // Form component  
    const { t } = useTranslation();     // Translation hook

    const [product, setProduct] = useState("");     // useState that will contains the value of the product selected (dropdown)
    const [cost, setCost] = useState(Number());       // useState that will contains the cost of the product
    const [units, setUnits] = useState(Number());     // useState that will contains the number of units of the product

    const toSave = (e) => {     // Save the product selected by the user and its units
        e.preventDefault();     // Prevent the automatic behaviour of the form (onSubmit)       

        toAddProduct({  // Add a new product in the cart when the onSubmit is activate
            product,
            cost,
            units
        });

        // Clean these useStates
        setProduct("");
        setCost(Number());
        setUnits(Number());
    };

    const toAddCost = (product) => {    // Set the cost of the product selected
        stock.map((item) => {
            if (item.name === product) {
                setCost(item.cost);
            };
        });
    };

    const findProduct = (stock, product) => {   // Helps to find the max quantity of available units of a specific product
        let maxUnits;
        stock.map((item) => {
            if (item.name === product) {
                maxUnits = item.units;
            };
        });
        return maxUnits;
    };

    // JSX
    return (
        <section className="section">
            <form 
                className="space-y-3"
                onSubmit={toSave} 
            >
                <h2 className="text-lg xl:text-xl font-medium text-center">{t("Add to Cart")}</h2>
                <DropdownSelect 
                    stock = { stock }
                    value = { product }
                    toChange = { value => [setProduct(value), toAddCost(value)] }    
                />
                <UnitsInput
                    found = { findProduct(stock, product) }
                    value = { units } 
                    toChange = { value => setUnits(Number(value)) }
                />
                <div className="w-full flex justify-between gap-2">
                    <button
                        type="submit"
                        className="button"
                    >
                        {t("Add to Cart")}
                    </button>
                    <button
                    type="button"
                        className="button"
                        onClick={cleanCart}
                    >
                        {t("Clean Cart")}
                    </button>
                </div>
            </form>      
        </section>
    )
};

export default Form;