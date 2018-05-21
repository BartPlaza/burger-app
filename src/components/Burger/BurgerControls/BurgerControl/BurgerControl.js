import React from 'react';
import styles from './BurgerControl.css';

const burgerControl = (props) => {
    return (
        <div className={styles.burger_control}>
            <div>{props.product.label}</div>
            <div>
                <button>Less</button>
                <button>More</button>
            </div>
        </div>
    )
};

export default burgerControl;