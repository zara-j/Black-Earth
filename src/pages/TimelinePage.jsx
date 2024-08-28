import React, { useState } from 'react';
import Timeline from '../components/Timeline';
import CreatePost from '../components/CreatePost';

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (content) => {
    setPosts([...posts, { content }]);
  };

  return (
    <div>
      <CreatePost onPostCreate={handlePostCreate} />
      <Timeline posts={posts} />
    </div>
  );
}
