import React from 'react';

const Input = (props) => {
    return (
        <div className="form-group">
            {props.label &&
                <div className='row'>
                    <label
                        className={`${props.labelClassName} col-sm-5`}>
                        {props.label}
                    </label>
                    {props.type !== "file" && <input
                        id={props.name}
                        name={props.name}
                        className={`${props.labelClassName} form-control col-sm-7`}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.handleChange}
                    />
                    }
                    {props.type === "file" && props.isMultiple && <input
                        id={props.name}
                        name={props.name}
                        className={`${props.labelClassName} form-control col-sm-7`}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.handleChange}
                        multiple
                    />
                    }
                    {props.errorMessage &&
                        <p style={{ color: 'red' }}>{props.errorMessage}</p>
                    }
                </div>
            }
            {!props.label && props.type !== "textArea" && props.type !== "file" &&
                <input
                    id={props.name}
                    name={props.name}
                    className="form-control"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.handleChange}
                />
            }
            {props.type === "textArea" &&
                <textarea
                    id={props.name}
                    name={props.name}
                    className="form-control"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.handleChange}>
                </textarea>
            }
        </div>
    );
}

export default Input;