import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="container">
      <h1>🍕 음식 이상형 월드컵 32강 🍔</h1>
      <p>당신의 최애 음식을 골라보세요!</p>
      <button className="btn" onClick={onStart}>시작하기</button>
    </div>
  );
};

export default Home;