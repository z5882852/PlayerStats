import React, { useState } from 'react';

const Navigation = ({ players, handleClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="navigation">
      <input
        type="text"
        placeholder="搜索玩家..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <button onClick={() => handleClick(player.id)}>{player.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
