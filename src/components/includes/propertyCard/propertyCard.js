import React from 'react';
import './style.css'

const PropertyCard = (props) => {
    return (
        <div>
            <a href='/contact-us'>
                <div className="card mb-3">
                    <img
                        className="card-img-top"
                        src={props.imageUrl}
                        height="300px"
                        alt={`${props.name} property at Lekki`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text mb-0" style={{ color: '#a3a3a3' }}>
                            {props.description}
                        </p>
                        <p
                            className='mb-0'
                            style={{ color: "#161616", fontSize: '13px', fontWeight: '400' }}>
                            Bedrooms: {props.numberOfBedrooms}
                            <span className='dot mr-2 ml-2'>.</span>
                            Bathrooms: {props.numberOfBathrooms}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PropertyCard;