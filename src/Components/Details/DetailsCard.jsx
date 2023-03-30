import React from 'react';
import './DetailsCard.css'

const DetailsCard = ({ detail }) => {
    return (
        <div>
            <div className='details-card text-center shadow-xl'>
                <h1>{detail}</h1>
            </div>
        </div>
    );
};

export default DetailsCard;