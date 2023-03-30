import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-semibold text-2xl'>Knowledge Cafe </h1>
                </div>
                <div  className='w-9 h-12 mt-3'>
                    <img className='rounded-3xl' src="https://randomuser.me/api/portraits/men/84.jpg" alt="" />
                </div>
          
            </div>
            <hr />

        </div>
    );
};

export default Header;