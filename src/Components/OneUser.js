import React, { Fragment } from 'react'

function OneUser({users}) {


  return (
    <Fragment>
        {users.map((e,index)=>{
            return(
                <div key={index} className='col md-4 m-4 text-center border border-danger'>
                    <p>{e.id}</p>
                    <p>{e.username}</p>
                    <p>{e.email}</p>
                </div>
            )
        })}
    </Fragment>
  )
}

export default OneUser