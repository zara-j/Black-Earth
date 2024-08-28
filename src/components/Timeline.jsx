import React from 'react';
import Post from './Post';

export default function Timeline({ posts }) {
  return (
    <div className="timeline">
      <h2>Timeline</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
