import React from 'react';
import Modal from "../../Modal/Modal";

const burgerSummary = (props) => {

    const allIngridients = [...props.ingridients];
    const ingrdientsToDisplay = allIngridients.filter((ingridient) => {
       return ingridient.product !== 'bread-top' && ingridient.product !== 'bread-bottom'
    });

    return (
        <Modal isModalVisible={props.isModalVisible}>
            <header className="modal-card-head">
                <p className="modal-card-title">Your order summary</p>
                <button className="delete" aria-label="close"></button>
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
                <p className="subtitle">Total price {props.totalPrice}$</p>
            </section>
            <footer className="modal-card-foot">
                <button className="button is-success">Order</button>
                <button className="button">Cancel</button>
            </footer>
        </Modal>
    );
};

export default burgerSummary;