import React from 'react';
import './CartProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CartProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="cartProduct">
            <div className="cartProduct_left">
                <img src={image} alt="" />
            </div>
            <div className="cartProduct_right">
            <div className="cartProduct_info">
                <div className="cartP_price">
                <p className="cartProduct_title">{title}</p>
                <div className="nal">
                <p className="cartProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                </div>
                </div>
                <div className="cartProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p><StarIcon className="star_icon"/></p>
                    ))}
                </div>
                <button className="button_cartProduct" onClick={removeFromCart}>Remove Item</button>
            </div>
            </div>
            <hr />
        </div>
    )
}

export default CartProduct
