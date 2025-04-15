import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
  const posts =useLoaderData();
  return (
    <div>
      <h2>these are my posts:{posts.length}</h2>
      <div className="">
        {
          posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;