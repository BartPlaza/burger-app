import React from 'react';
import logo from '../../../assets/logo.png';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    };

    toggleMenuHandler = () => {
        this.setState((prevState)=>{
            return {showMenu: !prevState.showMenu}
        });
    };

    render() {

        const menuClasses = ['navbar-menu navbar-end'];
        const burgerClasses = ['navbar-burger'];
        if (this.state.showMenu) {
            menuClasses.push('is-active');
            burgerClasses.push('is-active')
        }

        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item">
                        <img src={logo} alt="Burger logo"/>
                    </a>
                    <a href="#" className={burgerClasses.join(' ')} onClick={this.toggleMenuHandler}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={menuClasses.join(' ')}>
                    <a className="navbar-item">Burger builder</a>
                    <a className="navbar-item">About us</a>
                    <a className="navbar-item">Contact</a>
                </div>
            </nav>
        )
    }
}

export default Navigation;