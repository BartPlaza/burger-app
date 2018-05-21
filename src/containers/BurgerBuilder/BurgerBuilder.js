import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import styles from './BurgerBuilder.css';

class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingridients: [
                {product: 'bread-top', qty: 1},
                {product: 'cheese', qty: 3},
                {product: 'meat', qty: 2},
                {product: 'bread-bottom', qty: 1}
            ]
        };
    };


    render() {
        return (
            <div>
                <Burger ingridients={this.state.ingridients}/>
                <BurgerControls/>
            </div>
        )
    }
}

export default BurgerBuilder;