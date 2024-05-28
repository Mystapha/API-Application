import React from 'react'
import Cards2 from './Cards2'

function Userlist({users}) {
   
    
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",placeItems:"center"}}>
      {users.map((el)=>(<Cards2 el={el}/>)
    
    
    )}
    </div>
  )
}

export default Userlist
