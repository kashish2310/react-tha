import './style.css';
import { useState } from 'react';
function Card(props){
    const {title,dis,item,setItem,id}=props;
    return(
        <div className="card">
        <h1>{title}</h1>
        <h4>{dis}</h4>
        <button onClick={()=>{
            let temp = item;
            temp.filter((val,i)=>{
                return i!==id
            });
            setItem(temp);
        }}>Remove</button>
        </div>
    );
}

export default Card;