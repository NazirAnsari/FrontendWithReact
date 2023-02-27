import './App.css';
import {useState, useEffect } from 'react'; 
import axios from 'axios';

function Axios() {

  const[myData,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      // console.log(res.data);
      setData(res.data)
    });
  },[]);

  return (
  <>
  <h1>Axios</h1>
  {myData.map((post)=>{
        const{id,title,body}=post;
    

      return(
        <div className="App" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>

        </div>
      )
    
    })}
    

    </>
  );
}

export default Axios;
