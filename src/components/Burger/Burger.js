import React from 'react';
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import styles from './Burger.css';
import PropTypes from 'prop-types';

class Burger extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const ingridients = [];

        this.props.ingridients.forEach((ingridient) => {
            for (let i = 1; i <= ingridient.qty; i++) {
                ingridients.push(<BurgerIngridient type={ingridient.product}/>);
            }
        });

        return (
            <div className={styles.burger}>
                {ingridients}
            </div>
        );
    }
}

Burger.propTypes = {
    ingridients: PropTypes.array.isRequired
};

export default Burger;