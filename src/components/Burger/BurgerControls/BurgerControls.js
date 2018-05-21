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
                                                          removeProduct={props.removeProduct}/>)}
            </div>
        </div>
    )
};

export default burgerControls;