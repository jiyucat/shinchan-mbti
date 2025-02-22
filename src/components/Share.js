// src/components/Share.js
import React from 'react';

function Share({ result, character }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '나의 짱구 MBTI 결과',
        text: `나의 MBTI는 ${result.mbti}이며, 매칭된 짱구 캐릭터는 ${character.name}입니다!`,
        url: window.location.href,
      })
        .then(() => console.log('공유 성공'))
        .catch((error) => console.log('공유 실패', error));
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
    }
  };

  return <button onClick={handleShare}>결과 공유하기</button>;
}

export default Share;
