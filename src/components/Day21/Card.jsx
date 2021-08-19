import { useState } from "react";
import './style.css';

export default function Card({title,index,dis,item,setItem,handleOnChange}){
    const [edit, setEdit]= useState(true);

    return (
      <div>
      {edit?
      (<div className="card">
      <h1>{title} {dis}</h1>
      <button onClick={()=>{
        const newItem=item.filter((e,i)=>(
          i!==index
        ))
        setItem(newItem);
      }}>Delete</button>

      <button onClick={()=>{
          setEdit(false);
      }}>Edit</button>
      </div>): (
        <><button onClick={()=>{
          setEdit(true);
      }} className="donebtn">Done</button>
      <div className="editval">
      <input value={title} type="text" onChange={(e)=>
      {
        e.preventDefault();
        handleOnChange(e.target.value,dis,index)
        console.log(item);}
        } />

      <input type="number" value={dis} onChange={(e)=>{
        e.preventDefault();
        handleOnChange(title,e.target.value,index)
        console.log(item);
      }} />
      </div>
      </>)} 
      </div>
    );
}