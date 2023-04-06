import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFriend = (props) => {
    const propsdata=props.data;
    const getdatabyid=useNavigate();
    const handler=()=>{
        getdatabyid(`/SingleFriend/${propsdata.id}`)
    }
    
    return (
        <div>
            <h1>{propsdata.userId}</h1>
            <p>{propsdata.title}</p>
            <p>{propsdata.body}</p>
            <button onClick={handler}>See More</button>
            
        </div>
    );
};

export default SingleFriend;