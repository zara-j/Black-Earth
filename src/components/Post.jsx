import React from 'react';

export default function Post({ post }) {
  return (
    <div className="post">
      <p>{post.content}</p>
      <button>Like</button>
    </div>
  );
}
