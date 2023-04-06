import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loadonedata from '../Loadonedata/Loadonedata';

const Loaddata = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <p>New Rules We have to Comfort :{data.length}</p>
            {
                data.map(index=><Loadonedata indexdata={index} key={index.id}></Loadonedata>)
            }
        </div>
    );
};

export default Loaddata;