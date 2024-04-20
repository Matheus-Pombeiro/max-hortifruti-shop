import { useState } from "react";   // Import Hooks

// Component imports
import Stock from "../Stock";
import Form from "../Form";
import Cart from "../Cart";

const Main = () => {    // Main component
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

    const [subtotal, setSubtotal] = useState(Number); // State that contains the value of the purchase

    // Set the state cart through the onSubmmit of the Form component 
    const newProductCart = (product) => {
        // Walks the cart state and verify if the product that is been added to it already exists in the cart
        const found = cart.findIndex((item) => item.product === product.product);
        
        if (found === -1) {     // if not exists, add an entire new product
            setCart([...cart, product]);
        } else {    // but if exists, just sum the new units with the old ones
            setCart([...cart], cart[found].units += product.units);
        };

        setSubtotal(a => a + (product.cost * product.units));     // Set the state with the subtotal value of the purchase
    };

    // Subtract the units of the products in the stock everytime that new units of a product is added to the cart
    const subtractUnits = (product) => {
        // Walks the stock state
        stock.map((item) => {
            // Verify if the product that is have been added to the cart is the same that exists in the stock
            if (item.name === product.product) {
                // If true, subtract the product's units in the stock
                setStock([...stock], item.units -= product.units);
            };
        });
    };
    
    // JSX
    return (
        <main className="w-screen my-8 space-y-7">
            <Stock stock = { stock }/>
            <Form 
                stock = { stock }
                cart = { cart }
                toAddProduct = { product => [newProductCart(product), subtractUnits(product)] }
            />
            {cart.length > 0 && <Cart cart = {cart} subtotal = {subtotal} />}
        </main>
    )
};

export default Main;