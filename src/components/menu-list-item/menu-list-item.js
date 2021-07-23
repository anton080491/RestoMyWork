import React from 'react';
import './menu-list-item.scss';
import { Link } from 'react-router-dom';

const MenuListItem = ({menuItem,onAddToCart}) => {

    const {title, price, url, category, id} = menuItem;

    return (
            <li key={id} className="menu__item">
                 <Link to = {`/${id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">{category}: <span>salads</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>
                <button className="menu__btn" onClick={()=>onAddToCart()}>Add to cart</button>
                
            </li>
    )
}

export default MenuListItem;