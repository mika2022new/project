import React from 'react';

import styles from './Cart.module.css';

import ListImage from "../../assets/list.jpg";
import DeleteImage from "../../assets/delete.jpg";



const Cart = (props) => {
    return (
        <React.Fragment>
            <div className={styles.list__card}>
                <div className={styles.list__card_title}>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={styles.list__card_icon}>
                    <img className={styles.header__content_list} 
                    src={ListImage} alt="list"/>
                </div>
                <div className={styles.list__card_amount}>
                    <span className={styles.list__amount_num}>23</span>
                    <span>Products</span>
                </div>
                <div className={styles.list__card_date}>
                    <span className={styles.list__date_num}>04 / 12</span>
                    <span>06 / Apr / 2017</span>
                </div>
                <div className={styles.list__card_price}>
                    <span className={styles.list__price_num}>2 500 $</span>
                    <span>250 000.50 
                    <span className={styles.devise}>UAH</span></span>
                </div>
                <div className={styles.list__card_delete}>
                    <img src={DeleteImage} alt="delete"/>
                </div>
            </div>            
            
        </React.Fragment>
    );
};

export default Cart;