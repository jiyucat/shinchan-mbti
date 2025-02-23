// src/components/CharacterInfo.js
import React from 'react';

function CharacterInfo({ character }) {
  if (!character) return null;
  
  return (
    <div className="character-info">
      <h3>{character.name}</h3>
      <p>{character.description}</p>
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
  );
}

export default CharacterInfo;
