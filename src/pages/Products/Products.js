import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
import BG1 from '../../imgaes/background1.jpg';
import BG2 from '../../imgaes/background2.jpg';

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
        <div className='Product-container'>

            {/* <div className='carousel'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}

            <div>
                <Carousel fade className='carousel-2'>
                    {
                        allFoods.map(food =>
                            <Carousel.Item>
                                <div className='carousel-food'>
                                    <img src={food.img} alt="" />
                                    <h4>Name: {food.name}</h4>
                                    <p>Price: {food.price}</p>
                                    <button onClick={() => handleAddToCart(food)}>Add To Cart</button>
                                </div>
                            </Carousel.Item>)
                    }
                </Carousel>
            </div>
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
        </div>
    );
};

export default Products;