import React from 'react';

const modal = (props) => {

    const styles = ['modal'];
    if(props.isModalVisible){
        styles.push('is-active')
    }

    return (
        <div className={styles.join(' ')}>
            <div className="modal-background"></div>
            <div className="modal-card">
                {props.children}
            </div>
        </div>
    )
};

export default modal;