import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import styles from './BurgerBuilder.css';
import BurgerSummary from "../../components/Burger/BurgerSummary/BurgerSummary";

class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingridients: [
                {product: 'bread-top', qty: 1, price: 2},
                {product: 'salad', qty: 1, price: 1},
                {product: 'cheese', qty: 3, price: 2},
                {product: 'bacon', qty: 2, price: 1},
                {product: 'meat', qty: 0, price: 2},
                {product: 'bread-bottom', qty: 1, price: 2}
            ],
            totalPrice: 0,
            pucharsable: false,
            showSummary: false
        };
    };

    componentDidMount() {
        let ingridients = [...this.state.ingridients];
        let price = ingridients.reduce((total, product) => {
            return total + (product.qty * product.price);
        }, 0);
        this.setState({
            totalPrice: price,
        });
        this.checkPucharsable(ingridients);
    }

    checkPucharsable(ingridients) {
        let products = ingridients.reduce((total, product) => {
            return total + product.qty;
        }, 0);
        let pucharsable = products >= 4 ? true : false;
        this.setState({
            pucharsable: pucharsable
        })
    }

    addProductHandler = (product) => {
        let ingridients = [...this.state.ingridients];
        let ingridientId = ingridients.findIndex((item) => item.product == product);
        let ingridientPrice = ingridients[ingridientId].price;
        let newPrice = this.state.totalPrice + ingridientPrice;
        ingridients[ingridientId].qty += 1;
        let products = this.state.pucharsable += 1;
        this.setState({
            ingridients: ingridients,
            totalPrice: newPrice,
        });
        this.checkPucharsable(ingridients);
    };

    removeProductHandler = (product) => {
        let ingridients = [...this.state.ingridients];
        let ingridientId = ingridients.findIndex((item) => item.product == product);
        if (ingridients[ingridientId].qty >= 1) {
            ingridients[ingridientId].qty -= 1;
            let ingridientPrice = ingridients[ingridientId].price;
            let newPrice = this.state.totalPrice - ingridientPrice;
            this.setState({
                ingridients: ingridients,
                totalPrice: newPrice
            });
            this.checkPucharsable(ingridients);
        }
    };

    showSummary = () => {
        this.setState({
            showSummary: true
        });
    };

    hideSummary = () => {
        this.setState({
            showSummary: false
        });
    };

    render() {
        const ingridients = [...this.state.ingridients];
        let disabledStatuses = {};
        ingridients.forEach((product) => {
            let item = product.product;
            disabledStatuses[item] = product.qty <= 0;
        });

        return (
            <React.Fragment>
                <BurgerSummary ingridients={this.state.ingridients}
                               totalPrice={this.state.totalPrice}
                               isModalVisible={this.state.showSummary}
                               hideModalHandler = {this.hideSummary}/>
                <Burger ingridients={this.state.ingridients}/>
                <BurgerControls totalPrice={this.state.totalPrice}
                                addProduct={this.addProductHandler}
                                removeProduct={this.removeProductHandler}
                                ingridientsState={disabledStatuses}
                                pucharsable={this.state.pucharsable}
                                showSummary={this.showSummary}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;