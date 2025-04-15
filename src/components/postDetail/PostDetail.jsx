import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
  const post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;