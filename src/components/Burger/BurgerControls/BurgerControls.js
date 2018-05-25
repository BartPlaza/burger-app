import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import styles from './BurgerControls.css';

const products = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
];

const burgerControls = (props) => {
    return (
            <div className={styles.wrapper}>
                <div className={styles.burger_control_wrapper}>
                    {products.map((product) => <BurgerControl product={product}
                                                              addProduct={props.addProduct}
                                                              removeProduct={props.removeProduct}
                                                              isDisabled={props.ingridientsState[product.type]}/>)}
                </div>
                <div className={styles.burger_price}>
                    <span hidden={!props.pucharsable}>Price: {props.totalPrice}$</span>
                    <p className={styles.pucharse_error} hidden={props.pucharsable}>Add min 2 products</p>
                    <button className={styles.order_button} disabled={!props.pucharsable} onClick={props.showSummary}>
                        ORDER NOW <i className="fas fa-utensils"></i>
                    </button>
                </div>
            </div>
    )
};

export default burgerControls;