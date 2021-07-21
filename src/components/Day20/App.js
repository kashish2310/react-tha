import { useState } from 'react';
import './style.css';

function Card(props){
  const {title,dis,item,setItem,id}=props;
  return(
      <div className="card">
      <h1>{title}</h1>
      <h4>You have consumed {dis} cals Today</h4>
      <button onClick={()=>{
        const temp= item.filter((val,i)=>(i!==id));
        setItem(temp);
      }}>Remove</button>
      </div>
  );
}

function App() {
  const [item,setItem]= useState([{title:"Pizza", dis:"56"},{title:"Burger", dis:"69"},{title:"Coke", dis:"500"},
  {title:"Browne", dis:"180"},{title:"Pani puri", dis:"120"}]);
  const arr=[];
  for(let i=0;i<item.length;i++){
    arr.push(<Card key={i} title={item[i].title} dis={item[i].dis }  item={item} setItem={setItem} id={i}/>);
  }
  return (
    <div className="App">
  <div className="container">
   {arr.length ? arr:<h2>No Item Left</h2>}
  </div>
    </div>
  );
}

export default App;