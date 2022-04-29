import React from 'react';

const Alert = props => {
    return (
        <div 
        class={`alert alert-${props.status==='error' ? 'danger' : 'success'}`} 
        style={{margin: '30px auto', width: '60%'}}
        role="alert">
            {props.message}
        </div>
    )
}

export default Alert;