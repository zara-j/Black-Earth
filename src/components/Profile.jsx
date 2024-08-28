import React from 'react';

export default function Profile({ user }) {
  return (
    <div className="profile">
      <h2>{user.username}'s Profile</h2>
      <p>Posts: {user.posts.length}</p>
      <p>Subscribers: {user.subscribers.length}</p>
    </div>
  );
}
