import React from 'react';
import styles from './Layout.css';
import Navigation from "./Navigation/Navigation";

const layout = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <main className={styles.content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;