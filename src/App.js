import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import PlayerChart from './components/PlayerChart';
import PlayerHeatmap from './components/PlayerHeatmap';



const App = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [players, setPlayers] = useState([]);

  const handleClick = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  useEffect(() => {
    // 在组件加载时请求玩家数据
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch('https://backups-1306232736.cos.ap-chengdu.myqcloud.com/app/player.json'); // 替换为你的后端接口 URL
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error('获取玩家数据时出错:', error);
    }
  };

  return (
    <div className="app">
      <Navigation players={players} handleClick={handleClick} />
      <div className="content">
        {selectedPlayerId ? (
          <PlayerChart player={players.find((player) => player.id === selectedPlayerId)} />
        ) : (
          <p>请选择一个玩家</p>
        )}
      </div>
    </div>
  );
};

export default App;
