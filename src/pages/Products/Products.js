import React, { useContext } from 'react';
import { FoodContext } from '../../App';
import Product from './Product/Product';
import './Products.css';
import biriyani from '../../imgaes/biriyani.jpg';
import eggRice from '../../imgaes/egg-rice1.jpg';
import eggRice2 from '../../imgaes/egg-rice2.jpg';
import fishRice from '../../imgaes/fish-rice1.jpg';
import fishRice2 from '../../imgaes/fish-rice2.jpg';
import fishRice3 from '../../imgaes/fish-rice3.jpg';
import vegetableRice from '../../imgaes/vegetable-rice.jpg';
const Products = () => {
    const { value } = useContext(FoodContext);
    const [foods, setFoods] = value;
    const allFoods = [
        { id: 100, name: "Biriyani", price: 180, img: biriyani },
        { id: 101, name: "Egg Rice", price: 120, img: eggRice },
        { id: 102, name: "Egg Rice 2", price: 130, img: eggRice2 },
        { id: 103, name: "Fish Rice", price: 140, img: fishRice },
        { id: 104, name: "Fish Rice 2", price: 150, img: fishRice2 },
        { id: 105, name: "Fish Rice 3", price: 160, img: fishRice3 },
        { id: 106, name: "Vegetable Rice", price: 110, img: vegetableRice }
    ];

    const handleAddToCart = (item) => {
        const exists = foods.find(food => food.id === item.id);
        if (exists) {
            const existCart = foods.map(food => food.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : food);
            setFoods(existCart);
        }
        else {
            const newCart = [...foods, { ...item, quantity: 1 }];
            setFoods(newCart);
        }
    }
    return (
        <div className='display-foods'>
            {
                allFoods.map(food => <Product
                    key={food.id}
                    food={food}
                    handleAddToCart={handleAddToCart}
                >
                </Product>)
            }
        </div>
    );
};

export default Products;