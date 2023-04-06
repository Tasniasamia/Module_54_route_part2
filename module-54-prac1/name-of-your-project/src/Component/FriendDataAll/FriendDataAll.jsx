import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from '../SingleFriend/SingleFriend';

const FriendDataAll = () => {
    const getdata=useLoaderData();
    console.log(getdata);
    return (
        <div>
            {
                getdata.map(index=><SingleFriend data={index} key={index.id}></SingleFriend>)
            }
            
        </div>
    );
};

export default FriendDataAll;