import {useState} from 'react'


import './App.css'
import Header from './components/Header'
import React from 'react'
import Incress from './Incress'
import Employee from './Employee'
import Increment from './Increment'

function App() {
  const [state,setState]=useState(false)
  const [count,setCount]=useState(0)
  
     const addCount =()=>{
      setCount(count+1)
      

      }

//common function
 // function addCount(){
  //  count=count+1
  //  console.log(count)
 // }

  const data='Amaljith'
  let obj={
    title : '1st cound',
    count, 
  }
  let emp=[
    {Name:'AMAL' ,age:21},
    {Name:'JAGAN' ,age:21},
    {Name:'REYESH' ,age:21},]


  return (
    <div className='hai'>
      <Header data={data}/>
       <h1 style={{color:'red'}}>hello world</h1>
       <p style={{backgroundColor:'red'}}>fytyteijvrejnrvnebr<br/>iuhrvehnjfnvirvowrbiuron</p>

        <button onClick={addCount}>Add</button>

       <h3>counter : {count}</h3>
       <Hoi/>
       <Hoi/>


       <Incress {...obj}/>
       
       <Incress title='2nd cound' count={count}/>
        <h1 onClick={()=>setState(!state)}>show/hide</h1>
       { state ? <Increment/>: null}
       {
        emp.map((obj,index)=>

          (
            <Employee key={index} name={obj.Name} age={obj.age} />
          )

        )
       }


       
    </div>
  );
}

export default App;


function Hoi(){
  return(<h1 style={{color:'white'}}>hello world</h1>) 
}
