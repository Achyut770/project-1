import React, { useState } from 'react'

function Todo() {
    const [input , setInput] = useState("")
    const [array , setArray] = useState([])
                         
  function   handleClick(event){
      return setInput(event.target.value)
  }

    const Click = ()=>{
      setArray([...array , input])
      setInput("")
    }
  
  function Achyut(index){
     return setArray((olditems) =>{
         return olditems.filter((items,id)=>{
             return id!==index
         });
     });
  }
  function toggle(a , index){
   return(
       <div className='toggle'>
       <div className='cancel'   onClick={() => Achyut(index)}>Remove</div>
    <li key={index} id="index">{a}</li>
    
    </div>
  )
  
  }
  return (
    <div className='Container'>
      <div className='Form' >
         <div className='input'><input
          type="text"
           placeholder='write here'
            onChange={handleClick}
            value={input}
             name="input" />
             <button onClick={Click}>+</button></div> 
             <div>{input}</div>
      
             <div className='Result'>
             {array.map(toggle)}
             </div>
      </div>
    </div>
  )
}

export default Todo;