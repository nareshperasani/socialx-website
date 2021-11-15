import React from 'react';
import './Cart.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CartProduct from './CartProduct';
import CurrencyFormat from 'react-currency-format';

function Cart() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="cart">
            <div className="cart_left">
                <img className="cart_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3 className="cart_email">Hello, {!user ? 'Sign in': user?.email}</h3>
                <div className="cart_space">
                <h1 className="cart_title">Shopping Cart</h1>
                <p className="cart_price_p">Price</p>
                </div>
                {cart.map(item=>(
                    <CartProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                </div>
            </div>
            <div className="cart_right">
                <div className="cart_image">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
                </div>
                <div className="cart_rights">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Cart;
