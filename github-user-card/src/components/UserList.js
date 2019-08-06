import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User'

const UserList = props => {
    const[userList, setUserList] = useState([]);

    useEffect(() => {
        const getUsers = () => {
          axios
            .get('https://api.github.com/users/meganwhite')
            .then(response => {
              setUserList(response.data)
              
            })
            .catch(error => {
              console.error('Server Error', error);
            });
          }
    
          getUsers();
    
      }, [])

    return (
        <div className = "user-list">
            {props.todo.map(user => (
                <User key = {user.id} user = {user} />
            ))}
        </div>
    )
}

export default UserList