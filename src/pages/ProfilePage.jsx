import React, { useState } from 'react';
import Profile from '../components/Profile';

export default function ProfilePage() {
  const [user, setUser] = useState({
    username: 'john_doe',
    posts: [],
    subscribers: [],
  });

  return (
    <div>
      <Profile user={user} />
    </div>
  );
}
