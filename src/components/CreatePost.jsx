import React, { useState } from 'react';

export default function CreatePost({ onPostCreate }) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onPostCreate(content);
    setContent('');
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
