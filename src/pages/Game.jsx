import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import { initialFoods } from '../data/foodData';

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const Game = ({ onGameEnd }) => {
  const [currentRoundList, setCurrentRoundList] = useState([]);
  const [nextRoundList, setNextRoundList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [losers, setLosers] = useState([]); // 탈락자들을 순서대로 저장할 상태

  useEffect(() => {
    setCurrentRoundList(shuffleArray(initialFoods));
  }, []);

  const handleSelect = (selectedFood, unselectedFood) => {
    const currentRound = currentRoundList.length; // 현재 몇 강인지 (32, 16, 8, 4, 2)
    
    // 탈락한 음식에 탈락 라운드 정보를 기록
    const loserWithRound = { ...unselectedFood, eliminatedRound: currentRound };
    setLosers(prev => [loserWithRound, ...prev]);

    const newNextRound = [...nextRoundList, selectedFood];

    if (currentIndex + 2 < currentRoundList.length) {
      setNextRoundList(newNextRound);
      setCurrentIndex(currentIndex + 2);
    } else {
      if (newNextRound.length === 1) {
        // 최종 결승전 종료 -> 우승자 기록
        const winnerWithRound = { ...newNextRound[0], eliminatedRound: 1 };
        // 전체 순위 리스트를 합쳐서 부모(App.jsx)로 전달
        onGameEnd([winnerWithRound, loserWithRound, ...losers]);
      } else {
        setCurrentRoundList(newNextRound);
        setNextRoundList([]);
        setCurrentIndex(0);
      }
    }
  };

  if (currentRoundList.length === 0) return null;

  const food1 = currentRoundList[currentIndex];
  const food2 = currentRoundList[currentIndex + 1];
  const roundText = currentRoundList.length === 2 ? "결승전" : `${currentRoundList.length}강`;
  const matchCount = (currentIndex / 2) + 1;
  const totalMatches = currentRoundList.length / 2;

  return (
    <div className="container">
      <h2>{roundText} <span className="step">({matchCount}/{totalMatches})</span></h2>
      <div className="vs-container">
        <FoodCard food={food1} onClick={() => handleSelect(food1, food2)} />
        <div className="vs-text">VS</div>
        <FoodCard food={food2} onClick={() => handleSelect(food2, food1)} />
      </div>
    </div>
  );
};

export default Game;