import React,{useState,useEffect} from 'react'


function Increment() {
    const [counter,setCounter]=useState(0)
    const [counter2,setCounter2]=useState(0)
    useEffect(()=>{

        console.log('mounting...');
        console.log('updating...'+counter);
        
    },[counter])
    
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <h1>I am the hide component :{counter}</h1>

        


        <button onClick={()=>setCounter2(counter2+1)}>Increment</button>
        <h1>I am the hide component :{counter2}</h1>

        <h3>gaaaaa</h3>
        <img src={require("../images/fashion.jpg")} alt="" />

    </div>
  )
}

export default Increment