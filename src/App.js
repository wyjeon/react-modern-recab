import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} /> {/* 조건부 랜더링, isSpecial의 값에 따라 컴포넌트가 다르게 표시된다.*/}
      <Hello color="pink" isSpecial /> {/* props 값 설정을 생략하면 ={true}이다. */}
    </Wrapper>
  );
}

export default App;
