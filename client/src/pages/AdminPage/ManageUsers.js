import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'axios'

const ManageUsers = () => {
    const [userList, setUsers] = useState([])

    useEffect(() =>{
        const getAllUsers = async() =>{
            try {
                const res = await get('http://localhost:3001/users')
                setUsers(res.data)
            } catch (error) {
                console.log(error);                
            }
        } 
        getAllUsers()
    },[])

    return(
        <>
    <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        </thead>
        {userList ? (
        <tbody>
        {userList.map(u =>{
            return(
        <tr key={u._id}>
            <td >{u._id}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td><button>Edit</button></td>
        </tr>
            )
        })}
        </tbody>
        ) : <img src='https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif' alt='Loading...'/>
        }
    </table>
    <Link className='btn-back' to="/admin">Back</Link>
        </>
    )
}

export default ManageUsers