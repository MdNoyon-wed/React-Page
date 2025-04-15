import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/User';

const Users = () => {
  const Users = useLoaderData();
  console.log(Users)
  return (
    <div>
      <h1>Users</h1>
      <div className="">
        {
          Users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;