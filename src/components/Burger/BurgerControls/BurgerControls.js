import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import styles from './BurgerControls.css';

const products = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salat', type: 'salat'},
    {label: 'Bacon', type: 'bacon'}
];

const burgerControls = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.burger_control_wrapper}>
                {products.map((product) => <BurgerControl product={product}/>)}
            </div>
        </div>
    )
};

export default burgerControls;