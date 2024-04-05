import { useTranslation } from "react-i18next";     // i18next

import { useState } from "react";   // useState

// Component imports
import DropdownSelect from "../DropdownSelect";
import UnitsInput from "../UnitsInput";

const Form = ({ stock, toAddProduct }) => {    // Form component  
    const { t } = useTranslation();     // Translation hook

    const [product, setProduct] = useState("");     // useState that will contains the value of the product selected (dropdown)
    const [cost, setCost] = useState();       // useState that will contains the cost of the product
    const [units, setUnits] = useState();     // useState that will contains the number of units of the product

    const toSave = (e) => {     // Save the product selected by the user and its units
        e.preventDefault();     // Prevent the automatic behaviour of the form (onSubmit)       

        toAddProduct({  // Add a new product in the cart when the onSubmit is activate
            product,
            cost,
            units
        });

        // Clean these useStates
        setProduct("");
        setCost();
        setUnits();
    };

    const toAddCost = (product) => {    // Set the cost of the product selected
        stock.map((item) => {
            if (item.name === product) {
                setCost(item.cost);
            };
        });
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
                    toChange = { value => [setProduct(value), toAddCost(value)] }    
                />
                <UnitsInput 
                    toChange = { value => setUnits(Number(value)) }
                />
                <button 
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-700 active:bg-blue-400"
                >
                    {t("Add to Cart")}
                </button>
            </form>      
        </section>
    )
};

export default Form;