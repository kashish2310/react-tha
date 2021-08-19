import React, { useEffect, useState } from 'react';
function Apifetch(){
const [posts, setposts] = useState([]);
const Api = () => {
    useEffect(()=> {
        fetchItems();
    },[])
    const fetchItems = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const posts = await  response.json();
        setposts(posts);
    }
}

    
    return(
        <>
        MY API<br/>
        <button onClick={Api}>Fetch</button>
        <br/>
        posts.map((item,index)=(
            <h1  key={index}>{item.title}</h1>
        ))
       </>
    )
}
export default Apifetch;