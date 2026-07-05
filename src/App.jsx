import React, { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Result from './pages/Result';
import './App.css';

function App() {
  const [phase, setPhase] = useState('start');
  const [rankList, setRankList] = useState([]); // 32개 전체 순위 저장

  const handleStart = () => setPhase('playing');

  const handleGameEnd = (finalRankList) => {
    setRankList(finalRankList);
    setPhase('end');
  };

  const handleRestart = () => {
    setRankList([]);
    setPhase('start');
  };

  return (
    <div className="app-wrapper">
      {phase === 'start' && <Home onStart={handleStart} />}
      {phase === 'playing' && <Game onGameEnd={handleGameEnd} />}
      {phase === 'end' && <Result rankList={rankList} onRestart={handleRestart} />}
    </div>
  );
}

export default App;