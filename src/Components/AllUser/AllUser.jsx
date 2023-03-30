import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';

const AllUser = (props) => {
    const [users,SetUsers] = useState([])
    const totalRead=props.totalRead
    const handleDetails= props.handleDetails
    useEffect(()=>{
        fetch('../../../fakeData/data.json')
        .then(res => res.json())
        .then(data => SetUsers(data))
    },[])
    return (
        <div>
            {
                users.map(user => <SingleUser key={user.id} handleDetails={handleDetails} totalRead={totalRead} user = {user}></SingleUser>)
            }
            
        </div>
    );
};

export default AllUser;