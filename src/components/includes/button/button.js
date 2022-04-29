import React from 'react';
import './style.css';

const Button = props => {
    return (
        <a href={props.href}>
            <button
                style={props.style}
                className={`${props.className} btn btn-outline-primary my-2 my-sm-0`}
                onClick={props.action}
                id='button'
            >
                {props.icon && <i className={`fa fa-${props.icon} mr-2`}></i>}
                {props.name}
            </button>
        </a>
    )
}

export default Button;