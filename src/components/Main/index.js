import { useTranslation } from "react-i18next";     // i18next

import { useState } from "react";   // Import useState

// Component imports
import Stock from "../Stock";
import Form from "../Form";

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

    const [cart, setCart] = useState([]);   // Array that contains the products iserted in the client's cart

    // Set the state cart through the onSubmmit of the Form component 
    const newProductCart = (product) => {
        // Walks the cart state and verify if the product that is been add to it already exists in the cart
        const found = cart.findIndex((item) => item.product === product.product);
        
        if (found === -1) {     // if not exists, add an entire new product
            setCart([...cart, product]);
        } else {    // but if exists, just sum the new units with the old ones
            setCart([...cart], cart[found].units += product.units);
        }
    };

    console.log(cart);
    
    // JSX
    return (
        <main className="w-screen my-8 space-y-7">
            <Stock stock = { stock }/>
            <Form 
                stock = { stock }
                cart = { cart }
                toAddProduct = { product => newProductCart(product) }
            />
        </main>
    )
};

export default Main;