import React from 'react'

function Card(props) {
  return (
    <div className='card-apartement'>
       <div className='location'> 
          {props.title}
       </div>
    </div>
  )
}

export default Card
