import React from 'react';

const SingleUser = (props) => {
    const {title,picture}=props.user
    console.log(props.user)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-96 rounded' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;