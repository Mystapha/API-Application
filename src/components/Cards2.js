import React from 'react'
import './Cards2.css'
function Cards2({el}) {
  return (

    <div className="cards">
     <h3 id='hh'>The Users</h3>

     <div className="card">
     <p>{el.id}</p>
     <p>{el.name}</p>
     <p>{el.username}</p>
     <p>{el.email}</p>
     <p>{el.phone}</p>
     <p>{el.website}</p>
     <p>{el.company.name}</p>

     </div>
    </div>

  )
}

export default Cards2
