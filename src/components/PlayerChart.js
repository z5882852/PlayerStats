import React from 'react';
import PlayerHeatmap from './PlayerHeatmap';

const PlayerChart = ({ player }) => {
  const playerData = [
    { date: '2023-05-24', count: 2 },
    { date: '2023-05-25', count: 5 },
    { date: '2023-05-26', count: 3 },
    { date: '2023-05-27', count: 8 },
    { date: '2023-05-28', count: 7 },
    { date: '2023-05-29', count: 5 },
    { date: '2023-05-30', count: 5 },
    // ... 其他日期和对应的在线时间
  ];
  return (
    <div>
      <div className="player-chart">
        <h2>{player.name}</h2>
      </div>
      <PlayerHeatmap playerData={playerData} />
    </div>
  );
};

export default PlayerChart;
