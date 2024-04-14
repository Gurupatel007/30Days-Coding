import React, { useState } from 'react'
import datas from './datas.json'

const Data = () => {
    const[nData,setnData] = useState(datas);
    const removeOne = (dataId) => {
        setnData(nData.filter(data=>data.id!==dataId));
    }
    const UpdateOne = (dataId) => {
        setnData(nData.map(data=>{
            if(data.id===dataId){
                return{name:"Guru"};
            }
            else{
                return data;
            }
        }));
    }
    return (
        <div>
            <ul>
                {
                    nData.map(data=>
                        <li key={data.id}>
                            {data.name}
                            <br/>
                            <button onClick={()=>UpdateOne(data.id)}>Update</button>
                            <button onClick={()=>removeOne(data.id)}>Remove</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={()=>setnData([])}>Clear</button>
        </div>
    )
}

export default Data
