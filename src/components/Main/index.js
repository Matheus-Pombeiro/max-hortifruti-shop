import { useTranslation } from "react-i18next";     // i18next

import { useState } from "react";   // Import useState

// Component imports
import Stock from "../Stock";

const Main = () => {    // Main component
    const { t } = useTranslation();     // Translation hook

    const [stock, setStock] = useState([    // Array that contains the products of the shop
        {
            id: 1,
            name: "Banana",
            cost: 2.99,
            units: 13
        },
        {
            id: 2,
            name: "Apple",
            cost: 4.59,
            units: 11
        },
        {
            id: 3,
            name: "Cabbage",
            cost: 2.19,
            units: 14
        },
        {
            id: 4,
            name: "Cucumber",
            cost: 2.39,
            units: 12
        },
        {
            id: 5,
            name: "Kiwi",
            cost: 6.99,
            units: 10
        }
    ]);
    
    // JSX
    return (
        <main className="w-screen">
            <Stock stock = { stock }/>
        </main>
    )
};

export default Main;