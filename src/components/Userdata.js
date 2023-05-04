import React from 'react'

function Userdata({user}) {
  return (
    <div className='main'>
      <h1>{user.name}</h1>
    <p>{user.email}</p>
    </div>
  )
}

export default Userdata
