import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UsersDetails = () => {
  const user = useLoaderData();
 

  const {userId} =useParams();
  console.log(userId)

//  const params =useParams();
//  console.log(params.userId)

  const {website, name}=user;
  return (
    <div>
<h2>User Details here</h2>
<h4>name:{name}</h4>
<p>Website:{website}</p>
 
    </div>
  );
};

export default UsersDetails;