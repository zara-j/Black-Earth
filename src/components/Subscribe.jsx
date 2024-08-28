import React from 'react';

export default function Subscribe({ user, onSubscribe }) {
  return (
    <div className="subscribe">
      <button onClick={() => onSubscribe(user)}>Subscribe</button>
    </div>
  );
}
