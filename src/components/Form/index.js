import { useTranslation } from "react-i18next";     // i18next

import { useState } from "react";   // useState

// Component imports
import DropdownSelect from "../DropdownSelect";
import UnitsInput from "../UnitsInput";

const Form = ({ stock }) => {    // Form component  
    const { t } = useTranslation();     // Translation hook

    const [product, setProduct] = useState("");     // useState that will contain the value of the product selected (dropdown)
    
    const [units, setUnits] = useState();   // useState that will contain the number of units of the product

    const toSave = (e) => {     // Save the product selected by the user
        e.preventDefault();     // Prevent the automatic behaviour of the form (onSubmit)

        setProduct("");
    };


    // JSX
    return (
        <section className="section">
            <form className="space-y-3">
                <h2 className="text-lg xl:text-xl font-medium text-center">{t("Add to Cart")}</h2>
                <DropdownSelect 
                    stock = { stock }
                    toChange = { value => setProduct(value) }    
                />
                <UnitsInput 
                    toChange = { value => setUnits(value) }
                />
            </form>      
        </section>
    )
};

export default Form;