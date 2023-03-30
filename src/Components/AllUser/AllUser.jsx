import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';

const AllUser = () => {
    const [users,SetUsers] = useState([])
    useEffect(()=>{
        fetch('../../../public/fakeData/data.json')
        .then(res => res.json())
        .then(data => SetUsers(data))
    },[])
    return (
        <div>
            {
                users.map(user => <SingleUser user = {user}></SingleUser>)
            }
            
        </div>
    );
};

export default AllUser;