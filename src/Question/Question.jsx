import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-semibold'>1.what is Different between props and state?</h1>
                <p className='text-xl my-5'><strong>Props</strong> Props mean it refers a object and catch data from giving components and <br />
                    <strong>State </strong> State mean it also refers a object and catch data from current components</p>
            </div>
            <div>
                <h1 className='text-4xl mt-3 font-semibold'>2.How does useState work?.</h1>
                <p className='text-xl my-5'><strong>usestate</strong> is a hook, it returns an array with two values: the current state value, and a function to update the state value. The first value in the array is the current state value, which is initially set to the value passed to useState as an argument. The second value is a function that can be used to update the state value.</p>
            </div>
            <div>
                <h1 className='text-4xl mt-3 font-semibold'>3.Purpose of useEffect other than fetching data</h1>
                <p className='text-xl my-5'><strong>useEffect</strong> is a hook. Without fetching data for updating data change data according to interval and for various reason it is used</p>
            </div>
            <div>
                <h1 className='text-4xl mt-3 font-semibold'>4.How Does React work?</h1>
                <p className='text-xl my-5'>React is a library of Javascript. It makes easier to write js code. By making component it can use one more place and can pass different data. It make same syntax with different data.
                    It can work by:
                    <li>Routing</li>
                    <li>State Management</li>
                    <li>Server-site rendering</li>
                </p>
            </div>
        </div>
    );
};

export default Question;