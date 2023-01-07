import React from 'react'


function Incress(props) {
    const {count,title} =props

  return (
    <div>
    
        <h3>{title} : {count}</h3>
    </div>
  )
}

export default Incress