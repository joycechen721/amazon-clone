import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from './StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    //remove an item from the shopping basket
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct_image" src = {image}></img>

            <div className = "checkoutProduct_info">
                <p className = "checkoutProduct_title">{title}</p>
                <p className = "checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>🌟</p>
                        ))}
                </div>
                <button onClick = {removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

// Array(rating) passes rating (see top) and initializes an empty array the size of the rating. then, fills the array and maps each index to the star.