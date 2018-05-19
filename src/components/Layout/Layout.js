import React from 'react';
import styles from './Layout.css';

const layout = (props) => {
    return (
        <React.Fragment>
            <div>Navigation Sidedrawer Backdrop</div>
            <main className={styles.container}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;