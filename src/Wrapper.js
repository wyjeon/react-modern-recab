import React from 'react';

function Wrapper({ children }) {
  // App컴포넌트 내부의 내용이 보여지게 하기 위해서는 Wrapper에서 props.children을 랜더링 해주어야한다.
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
