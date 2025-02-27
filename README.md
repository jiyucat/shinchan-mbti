# 짱구 MBTI 테스트

이 프로젝트는 사용자의 MBTI 유형을 평가하고, 평가 결과에 따라 짱구 캐릭터를 매칭해주는 간단한 React 애플리케이션입니다. 12개의 질문을 통해 MBTI의 네 가지 척도(T/F, S/N, E/I, P/J)를 평가하며, 결과에 따라 맞춤형 짱구 캐릭터 정보를 보여줍니다.

## Status
In Progress : 아직 완성되지 않은 상태입니다.
- WebPage Link : https://jiyucat.github.io/shinchan-mbti/
- screenshot : ![image](https://github.com/user-attachments/assets/be92ec0e-5a7a-4678-b035-8141a8f79fdf)


## 기능

- **12개 질문**: 4개 그룹(T/F, S/N, E/I, P/J)으로 구성된 질문 진행
- **자동 진행**: 사용자가 옵션을 클릭하면 바로 다음 질문으로 넘어감
- **진행률 표시**: 진행률 바에 현재 진행 상황(예: 0/12, 1/12 등)을 표시
- **결과 계산 및 매칭**: 각 그룹별 점수를 집계해 MBTI 결과를 도출하고, 그에 맞는 짱구 캐릭터 정보를 보여줌
- **(선택 사항) SNS 공유**: 결과를 SNS로 공유할 수 있는 기능 제공

## 프로젝트 구조
<h3>프로젝트 구조</h3>
<pre>
/src
├── components
│   ├── Question.js       // 질문 UI 컴포넌트
│   ├── ProgressBar.js    // 진행률 바 컴포넌트
│   ├── Result.js         // 결과 페이지 컴포넌트
│   ├── Share.js          // SNS 공유 버튼 컴포넌트
│   ├── CharacterInfo.js  // 매칭된 캐릭터 정보 컴포넌트
├── data
│   ├── questions.json    // 질문 리스트 데이터
│   ├── characters.json   // MBTI별 캐릭터 매핑 데이터
├── App.js                // 메인 애플리케이션 파일
├── index.js              // React DOM 렌더링 진입점
├── styles.css            // 전체 스타일링
</pre>
