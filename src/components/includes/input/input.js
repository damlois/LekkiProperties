import React from 'react';

const Input = (props) => {
    return (
        <div class="form-group">
            {props.label &&
                <label className={props.labelClassName}>
                    {props.label}
                </label>}
            <input
                id={props.name}
                name={props.name}
                className="form-control"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    );
}

export default Input;