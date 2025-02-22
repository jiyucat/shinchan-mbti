// src/components/Result.js
import React from 'react';
import Share from './Share';
import CharacterInfo from './CharacterInfo';

function Result({ result, characterInfo }) {
  return (
    <div className="result">
      <h2>나의 MBTI: {result.mbti}</h2>
      <CharacterInfo character={characterInfo} />
      <Share result={result} character={characterInfo} />
    </div>
  );
}

export default Result;
