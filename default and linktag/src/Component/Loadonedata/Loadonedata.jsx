import React from 'react';
import { Link } from 'react-router-dom';

const Loadonedata = (props) => {
    const datas= props.indexdata
    return (
        <div style={{padding:"10px",border:"1px solid red"}}>
            <h3>Name: {datas.name}</h3>
            <p>Email: {datas.email}</p>
            <p>Phone: {datas.phone}</p>
            <Link to={`/Loadonedata/:${datas.id}`}> Show More Details</Link>
        </div>
    );
};

export default Loadonedata;