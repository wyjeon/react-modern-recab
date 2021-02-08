import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      {/* 
        Wrapper 컴포넌트는 현재 Hello 컴포넌트를 감싸고 있다.  
        컴포넌트 태그 사이에 넣은 값을 조회하려면 Wrapper 컴포넌트에서 'props.childrend'을 사용해야 한다.
      */}
      <Hello name="react" /> {/* 1) App 컴포넌트에서 Hello 컴포넌트에 name이라는 값을 전달해 준다. */}
      <Hello name="react" color="red" /> {/* 2) 여러 개의 props를 전달 */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
