import React from 'react';
import { useProduct } from './context/getpro';
import './ProductCards.css';
import { Link } from 'react-router-dom';
import { productquantity } from '../src/helpers/helper';
import { HiBuildingStorefront } from "react-icons/hi2"; 
import { MdDeleteOutline } from "react-icons/md";
import { usecard } from "../src/context/Cardcontext";

function Propage() {
  const {state, dispatch } = usecard();
  const products = useProduct();

  const clickhand = (type, data) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="products-grid">
      {products.map((item, index) => {
        const quantity = productquantity(state, item.id);

        return (
          <div key={index} className="product-card">
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt={item.name} className="product-image" />
            </Link>
            <h2 className="product-name">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <div className="product-footer">
              <span className="product-price">{item.price}</span>

              {quantity === 0 ? (
                <button
                  className="product-button"
                  onClick={() => clickhand("ADD_ITEM", item)}
                  title="افزودن به سبد خرید"
                >
                  <HiBuildingStorefront />
                </button>
              ) : (
                <button
                  className="product-button"
                  onClick={() => clickhand("INCREASE", item)}
                  title="افزایش تعداد"
                >
                  +
                </button>
              )}

              {!!quantity && <span>{quantity}</span>}

              {quantity === 1 && (
                <button
                  className="product-button delete"
                  onClick={() => clickhand("REMOVE_ITEM", item)}
                  title="حذف از سبد خرید"
                >
                  <MdDeleteOutline />
                </button>
              )}

              {quantity > 1 && (
                <button
                  className="product-button"
                  onClick={() => clickhand("DECREASE_ITEM", item)}
                  title="کاهش تعداد"
                >
                  -
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Propage;
