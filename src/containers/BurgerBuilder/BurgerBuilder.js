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
                {product: 'salad', qty: 1},
                {product: 'cheese', qty: 3},
                {product: 'bacon', qty: 2},
                {product: 'meat', qty: 0},
                {product: 'bread-bottom', qty: 1}
            ]
        };
    };

    addProductHandler = (product) => {
        let ingridients = [...this.state.ingridients];
        let ingridientId = ingridients.findIndex((item)=> item.product == product);
        ingridients[ingridientId].qty += 1;
        this.setState({
            ingridients: ingridients
        });
    };

    removeProductHandler = (product) => {
        let ingridients = [...this.state.ingridients];
        let ingridientId = ingridients.findIndex((item)=> item.product == product);
        if(ingridients[ingridientId].qty >= 1) ingridients[ingridientId].qty -= 1;
        this.setState({
            ingridients: ingridients
        });
    };


    render() {
        return (
            <div>
                <Burger ingridients={this.state.ingridients}/>
                <BurgerControls addProduct={this.addProductHandler} removeProduct={this.removeProductHandler}/>
            </div>
        )
    }
}

export default BurgerBuilder;