import React from 'react';
import Modal from "../../Modal/Modal";

class BurgerSummary extends React.Component {

    constructor(props) {
        super(props);
    };

    shouldComponentUpdate(nextProps){
        return nextProps.isModalVisible !== this.props.isModalVisible;
    }

    render() {

        const allIngridients = [...this.props.ingridients];
        const ingrdientsToDisplay = allIngridients.filter((ingridient) => {
            return ingridient.product !== 'bread-top' && ingridient.product !== 'bread-bottom'
        });

        return (
            <Modal isModalVisible={this.props.isModalVisible}>
                <header className="modal-card-head">
                    <p className="modal-card-title">Your order summary</p>
                    <button className="delete" aria-label="close" onClick={this.props.hideModalHandler}></button>
                </header>
                <section className="modal-card-body">
                    <h1 className="subtitle"> Your awesome burger:</h1>
                    <ul>
                        {ingrdientsToDisplay.map((ingridient) => {
                            return (
                                <li>{ingridient.product} x {ingridient.qty}</li>
                            )
                        })}
                    </ul>
                    <hr/>
                    <p className="subtitle">Total price {this.props.totalPrice}$</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Order</button>
                    <button className="button" onClick={this.props.hideModalHandler}>Cancel</button>
                </footer>
            </Modal>
        );
    };
};

export default BurgerSummary;