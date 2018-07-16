import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the Home Componen ft</div>
      <button onClick={() => console.log('ahoy')}>
        Click Me
      </button>
    </div>
  );
};

export default {
  component: Home
};