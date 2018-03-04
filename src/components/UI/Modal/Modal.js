import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    
    render () {
        return (
        <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}
         style={{
             transition: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
             opacity: this.props.show ? '1' : '0',
             display: this.props.show ? 'block' : 'none'
         }}
        >
            {this.props.children}
        </div>
    </Aux>
        );
    }
}

export default Modal;