import React from 'react';
import styles from './BurgerControl.css';

const burgerControl = (props) => {
    return (
        <div className={styles.burger_control}>
            <div>{props.product.label}</div>
            <div>
                <button onClick={() => props.removeProduct(props.product.type)}>Less</button>
                <button onClick={() => props.addProduct(props.product.type)}>More</button>
            </div>
        </div>
    )
};

export default burgerControl;