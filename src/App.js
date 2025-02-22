// src/App.js
import React, { useState } from 'react';
import './styles.css';
import questionsData from './data/questions.json';
import charactersData from './data/characters.json';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Result from './components/Result';

function App() {
  const totalQuestions = questionsData.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [characterInfo, setCharacterInfo] = useState(null);

  // 선택지를 클릭하면 즉시 다음 질문으로 이동
  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));

    // 마지막 질문이면 결과 계산
    if (currentQuestionIndex === totalQuestions - 1) {
      calculateResult({ ...answers, [id]: value });
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const calculateResult = (finalAnswers) => {
    // 그룹별 점수 집계 (예: TF, SN, EI, PJ)
    const groups = { TF: { T: 0, F: 0 }, SN: { S: 0, N: 0 }, EI: { E: 0, I: 0 }, PJ: { P: 0, J: 0 } };

    questionsData.forEach(q => {
      const answer = finalAnswers[q.id];
      if (answer) {
        groups[q.group][answer]++;
      }
    });

    let mbti = '';
    mbti += groups['TF']['T'] >= groups['TF']['F'] ? 'T' : 'F';
    mbti += groups['SN']['S'] >= groups['SN']['N'] ? 'S' : 'N';
    mbti += groups['EI']['E'] >= groups['EI']['I'] ? 'E' : 'I';
    mbti += groups['PJ']['P'] >= groups['PJ']['J'] ? 'P' : 'J';

    // MBTI 결과에 맞는 캐릭터 정보 가져오기
    const character = charactersData[mbti] || { name: '기본짱구', description: '기본 설명' };

    setResult({ mbti });
    setCharacterInfo(character);
  };

  if (result) {
    return <Result result={result} characterInfo={characterInfo} />;
  }

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div className="App">
      <h1>짱구 MBTI 테스트</h1>
      <ProgressBar current={currentQuestionIndex} total={totalQuestions} />

      <Question 
        question={currentQuestion}
        answer={answers[currentQuestion.id]}
        onChange={handleAnswer}
      />
    </div>
  );
}

export default App;
