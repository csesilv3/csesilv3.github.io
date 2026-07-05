import React from 'react';

const Result = ({ rankList, onRestart }) => {
  // 우승자는 배열의 첫 번째 아이템
  const winner = rankList[0];

  // 라운드 숫자를 보기 좋은 등수로 변환하는 함수
  const getRankText = (round) => {
    if (round === 1) return "1위 🏆";
    if (round === 2) return "2위 🥈";
    if (round === 4) return "공동 3위";
    if (round === 8) return "공동 5위";
    if (round === 16) return "공동 9위";
    if (round === 32) return "공동 17위";
    return "";
  };

  return (
    <div className="container">
      <h1>🏆 최종 결과 🏆</h1>
      
      <div className="winner-card">
        <img src={winner.src} alt={winner.name} />
        <h2>{winner.name} 우승!</h2>
      </div>

      <button className="btn" onClick={onRestart}>다시 시작하기</button>

      {/* 전체 순위 리스트 영역 */}
      <div className="ranking-section">
        <h2>📊 전체 순위 리스트</h2>
        <div className="ranking-list">
          {rankList.map((food, index) => (
            <div key={index} className="ranking-item">
              <span className="rank-badge">{getRankText(food.eliminatedRound)}</span>
              <span className="rank-name">{food.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;