import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';

function Product({id, title, image, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    const history = useHistory();

    const addToCart = (e)=>{
        e.preventDefault();
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
        history.push('/cart')
    }
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title" >{title}</p>
                <p className="product_price">
                    <small className="small">$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p><StarIcon className="star_icon"/></p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button className="btn-product"onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
