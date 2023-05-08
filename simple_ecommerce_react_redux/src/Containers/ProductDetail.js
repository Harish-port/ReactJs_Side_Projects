import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addSelectedProductToCart,

} from "../Redux/Actions/productActions";
import { Navigate } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  let product = useSelector((state) => state.product);
  let getAllCartItems = useSelector((state) => state.cartAllItems);
  console.log(getAllCartItems, "King");
  console.log(product, "ahjr");
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  const addItemsToCart = () => {
    let selectedProductList;
    if (product.quantity) {
      product.quantity += 1;
      product.totalPrice = product.price * product.quantity;
      selectedProductList = product;
    } else {
      product.quantity = 1;
      product.totalPrice = product.price;
      selectedProductList =product;
    }
    dispatch(addSelectedProductToCart(selectedProductList));
    // <Navigate to={`/cart/${productId}`} />
    console.log(selectedProductList, "selectedProductList");
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {console.log(cartItems, "cartItems1111")}
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui four column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {/* <Link to={`/cart/${productId}`} > */}
                <div className="ui vertical animated button" tabIndex="0" onClick={addItemsToCart}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content" >Add to Cart</div>
                </div>
                {/* </Link> */}
                <div className="ui vertical animated button button-buy-now" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Buy Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;