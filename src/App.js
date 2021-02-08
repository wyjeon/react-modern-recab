import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';

  const style = {
    backgroundColor: 'black', // 4-1)camelCase형태로 네이밍 해줘야한다.
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <>
      {/* 2)두개 이상의 태그는 무조건 하나의 태그로 감싸져야 한다. */}
      <Hello /> {/* 컴포넌트는 일종의 UI조각 */}
      <Hello /> {/* 여러번 재사용이 가능하다. */}
      <Hello />
      {/*
        <div> -> error! 1)태그는 꼭 닫혀있어야 한다.
      */}
      <br /> {/*태그 사이에 내용이 없을 경우에는 Self Closing을 사용한다. */}
      <div>{name}</div> {/* 3)JSX 내부에 자바스크립트 변수를 보여줘야 할 때는 {}로 감싼다.*/}
      <br />
      <div style={style}>{name}</div>
      <br />
      <div className="gray-box"></div> {/* 4-2)CSS class를 설정할 때에는 'class='가 아닌 'className='으로 설정해야한다. */}
      {/* 2)div태그보다는 Fragment로 감싼다.*/}
      {/* 5-1)주석은 이런 형태로 작성한다. */}
      <Hello
      // 5-2) 열리는 태그 내부에는 이렇게도 작성할 수 있다.
      />
    </>
  );
}

export default App;
