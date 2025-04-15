import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
  const users = use(usersPromise)
  console.log('users 2 data load', users);
  return (
    <div>
      <h2>Hi</h2>
    </div>
  );
};

export default Users2;