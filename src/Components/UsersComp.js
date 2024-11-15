import React, { useEffect, useState } from 'react'
import OneUser from './OneUser';
import actionUsersList from './../store/actionUser';
import { useDispatch, useSelector } from 'react-redux';
// import myReducerUser from './../store/reducerUser';


function UsersComp() {
    // const [users, setUsers] = useState([
    // {name: 'John', age: 20},
    //     {name: 'Jane', age: 21},
        // {name: 'Mary', age: 22},
    // ])
     


    const users = useSelector(state=>state.users)

    const dispatch=useDispatch();
    useEffect(() =>{
       dispatch(actionUsersList())
    },[])
    

  return (
    <div className='container'> 
        <div className='row'>
          <OneUser users={users}/>
          {/* {users.map((e,index)=>{
            return(
                <div key={index} className='col md-4 m-4 text-center border border-danger'>
                    <p>{e.id}</p>
                    <p>{e.username}</p>
                    <p>{e.email}</p>
                </div>
            )
        })} */}
        </div>
    </div>
  )
}

export default UsersComp;