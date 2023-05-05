import React from 'react'
import { useSelector } from "react-redux";

export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products[0]);
    const { id, title } = products;
    return (
        <div className='four column wide'>
            <div className='card'>
                <div className='image'>
                    <div className='content'>
                        <div>{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
