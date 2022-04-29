import React from 'react';
import './style.css'

const AgentCard = (props) => {
    return (
        <div className="card">
            <div style={{ position: 'relative' }}>
                <img
                    className="card-img-top"
                    src={props.imageUrl}
                    height="200px"
                    alt={`Agent ${props.name}`}
                />
                <p className='text-center'
                    style={{
                        padding: '16px 10px 16px 10px',
                        backgroundColor: '#00000052',
                        position: 'absolute',
                        bottom: '0',
                        width: '100%',
                        margin: '0 auto',
                        color: 'white'
                    }}>
                    +2348100452087
                </p>
            </div>
            <div className="card-body text-center">
                <p className='mb-0' style={{ fontSize: '18px', fontWeight: '600' }}>{props.name}</p>
                <p className="card-text mb-0" style={{ color: '#a3a3a3' }}>
                    {props.position}
                </p>
                <p
                    className='mb-0 text-primary'
                    style={{ fontSize: '13px', fontWeight: '400' }}>
                    {props.numberOfSales} Recent Sales
                </p>
            </div>
        </div>
    );
}

export default AgentCard;