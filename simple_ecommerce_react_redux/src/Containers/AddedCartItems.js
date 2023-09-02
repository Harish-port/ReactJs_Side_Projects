import React from 'react'
import { useSelector } from "react-redux";
import './AddedCartItems.css'
export default function AddedCartItems() {
    let selectedProduct = useSelector((state) => state.cartAllItems.cartItems);
    console.log(selectedProduct);
    // const { image, title, price, category, description } = selectedProduct;

    console.log(selectedProduct);

    const subTotalPrice = selectedProduct.reduce((accu, curretValue) => {
        return accu = accu + curretValue.price;
    }, 0);
   
    return (
        <div className="ui grid container cart-wrapper">
            <div className="ui ten wide column placeholder segment">
                {
                    selectedProduct.map((item) => (
                        <div className='product-details-wrapper' key={item.id}>
                            <img className="ui small fluid image" src={item.image} alt={item.title} />
                            <div className='product-title'>
                                {item.title}
                                <div className='add-more-items container fluid'>
                                    <div className='sub-items'>-</div>
                                    <div className=''>
                                        Qty : 1
                                    </div>
                                    <div className='add-items'>+</div>
                                </div>
                            </div>
                            <h1>Rs {item.price}</h1>
                        </div>
                    ))
                }
            </div>
            <div className="ui two wide column placeholder segment total-price-wrapper">
                <div className='product-details-wrapper'>
                    <h1>Subtotal (10 items): Rs. {subTotalPrice.toFixed(2)}  </h1>
                </div>
            </div>
        </div>
    )
}
