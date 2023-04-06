import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleFriendid = () => {
    const navgation=useNavigate();
    function goback(){
        navgation(-1);
    }
    const ferloaddata=useLoaderData();
    console.log(ferloaddata);
    return (
        <div>
           <h2>id:{ferloaddata.id}</h2>
           <p>title:{ferloaddata.title}</p>
           <p>body:{ferloaddata.body}</p>
           <button onClick={goback}>Go Back</button>
        </div>
    );
};

export default SingleFriendid;