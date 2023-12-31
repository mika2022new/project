import styles from './Cart.module.css';
import Modal from './Modal';

const Cart = (props) => {

    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{ id: props.id, name: "Sushi", amount: 2, price: 10.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        
        <Modal onHideCart={props.onHideCart}>
            {cartItems} 

            <div className={styles.total}>
                <span>Total</span>
                <span>49.99</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={styles.button}>Delete</button>
            </div>
        </Modal>
    ); 
};

export default Cart;